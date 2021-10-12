import { promises as fs } from 'fs';

/*
* Reads the contents of the file
* @param dbFile - path/name of the file
* @return content of the file (array) OR an error
*/
const getAll = async dbFile => {
    try {
        let content = await fs.readFile(dbFile);
        return JSON.parse(content);             
    } catch (err) {        
        if (err.code === "ENOENT") { // checks if error code is ENOENT (no such file or directory)
            await write(dbFile, "[]", 0) // create JSON file with a null array 
            return JSON.parse("[]");             
        } else {
            console.error("module error", err);
            throw err;
        }
    }
}


/*
* Finds specific data
* @param keyProp - property name to look for
* @param keyValue - value of the property to find
* @param dbFile - path/name of the file
* @return found data (array) OR an error
*/
const getItemById = async (keyProp, keyValue, dbFile) => {
    try {
        let items = await getAll(dbFile)
        return items.find(item => item[keyProp] == keyValue)
    } catch (err) {
        console.error(err)
        throw err
    }    
}


/* 
* Adds new data to the file
* @param addFile - path/name of the file
* @param addData - data to write on the file
* @return nothing or error message
*/
const add = async (addFile, addData) => {
    try {
        const dataOnFile = await getAll(addFile)
        dataOnFile.push(addData)        
        await write(addFile, dataOnFile)
    } catch (err) {
        console.error(err)
        throw err
    }
}


/* 
* Private function for the module
* Writes data onto the file (if exists)
* Creates the file with an empty array (if does not exist)
* @param writeFile - path/name of the file
* @param writeData - data to write on the file
* @param writeSW - indicator if file exists or not (identified in getAll function)
* @return nothing or error message
*/
const write = async (writeFile, writeData, writeSW) => {
    try {
        if ( writeSW == 0 ) { // create file with empty array   
            await fs.writeFile(writeFile, writeData) 
        } else {
            await fs.writeFile(writeFile, JSON.stringify(writeData, null, 2)) // additional arguments format the JSON file to be more readable   
        }        
    } catch (err) {
        if (err.code === "ENOENT") {
            return
        }
        console.error(err)
        throw err
    }    
}


export {
    add,
    getAll,
    getItemById    
}