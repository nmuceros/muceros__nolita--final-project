import express from "express"; 
import { v4 as uuidv4 } from "uuid"; // use to auto generate id
import validateData from "../functions.js"; // import function
import verifyToken from "../../src/middleware/jwtVerify.js";
import * as db from "../dbHandler.js";
import path from "path";

// database file location
const entriesDbFile = path.resolve(process.env.DB_ENTRIES_LOCATION); // resolve method normalizes the path format based on the current OS

const contactRouter = express.Router();

// checks invalid properties/data
const validateEntries = (req, res, next) => { // middleware    
    const usersValidProp = ["name", "email", "phoneNumber", "content"]; // required properties
    let errorMessages = validateData("entries", usersValidProp, req.body);
    if (errorMessages.length < 1) {
        next();
    } else {
        const errorMessageObj = {
            message: "Validation error",
            invalid: errorMessages,
        };
        return res.status(400).json(errorMessageObj); // return error in json format indicating invalid/missing properties/data
    };  
};

// entries GET route
// entries JSON file will be created if does not exist
contactRouter.get("/api/contact_form/entries", verifyToken, async (req, res) => {
// contactRouter.get("/contact_form/entries", async (req, res) => {
    try {
        const entries = await db.getAll(entriesDbFile); // entries = [] (if JSON file is created)
        return res.status(200).send(entries);
    } catch (err) {
        if (err.code === "ENOENT") { // checks if error code is ENOENT (no such file or directory)
            return res.status(200).send.json([]); // returns [] as response 
        } else {
            console.error("module error", err);
            return next(err);
        }
    }
 });


// entries GET route - specific ID
// entries JSON file will be created if does not exist
contactRouter.get("/api/contact_form/entries/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const entriesFound = await db.getItemById("id", id, entriesDbFile); // value is an object (if found)
        if (entriesFound) {
            return res.status(200).send(entriesFound);
            // next()        
        } else {
            return res.status(404).json( { message: `entry ${id} not found` });
        }
    } catch (err) {
        console.error("module error", err);
        return next(err);
    }
 });


 // entries POST route
 // entries JSON file will be created if does not exist
 contactRouter.post("/api/contact_form/entries", validateEntries, async (req, res) => {
    try {
        // add new entry
        let newEntry = { id: uuidv4(), ...req.body }; // uuidv4() - auto generates id
        await db.add(entriesDbFile, newEntry); 
        return res.status(201).send(newEntry);
    } catch (err) {
        console.error("are we here?", err);
        return next(err);
    }
})

// middleware to handle all other routes are in the authRouter.js

export default contactRouter;