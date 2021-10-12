import express from "express"; 
import { v4 as uuidv4 } from "uuid"; // use to auto generate an id
import validateData from "../functions.js"; // import function
import verifyToken from "../../src/middleware/jwtVerify.js";
import * as db from "../dbHandler.js";
import path from "path";
import argon2 from "argon2";

// database file location
const usersDbFile = path.resolve(process.env.DB_USERS_LOCATION); // resolve method normalizes the path format based on the current OS

const userRouter = express.Router();

// checks invalid properties/data
const validateUserInput = (req, res, next) => {
    const usersValidProp = ["name", "password", "email"]; // required properties
    let errorMessages = validateData("users", usersValidProp, req.body);
    if (errorMessages.length < 1) {
        next();
    } else {
        const errorMessageObj = {
            message: "validation error",
            invalid: errorMessages,
        };
        return res.status(400).json(errorMessageObj); // return error in json format indicating invalid/missing properties/data
    };  
};


/* 
* Private function for the module to hash the password
* @param password - password to hash
* @return hashed password
*/
const createHash = async (password) => {
    try {      
      const hash = await argon2.hash(password); // more rounds, means slower, but harder to figure out the hash
      return hash;
    } catch (err) {
      console.error(err);
    }
  }


/* 
* Private function for the module to verify the password
* @param hashedPW - hashed password
* @param password - entered password
* @return boolean
*/
const verifyPassword = async (hashedPW, password) => {
    try {
      let match = await argon2.verify(hashedPW, password);   
      return match;
    } catch (err) {
      console.error(err);
    }
  }


// GET /users route
// users JSON file will be created if does not exist
// userRouter.get("/users", verifyToken, async (req, res, next) => {
userRouter.get("/api/users", async (req, res, next) => {
    try {
        // call getAll function from dbHandler
        // JSON file will be created if does not exist
        const users = await db.getAll(usersDbFile); // users = [] once JSON file is created
        users.map(user => delete user.password); // removes password property so it will not be visible
        return res.status(200).send(users);
    } catch (err) {
        if (err.code === "ENOENT") { // checks if error code is ENOENT (no such file or directory)
            return res.status(200).send.json([]);
        } else {
            console.error("module error", err);
            return next(err);
        }
    }
})


// POST /users route
// userRouter.post("/users", verifyToken, validateUserInput, async (req, res, next) => {    
userRouter.post("/api/users", validateUserInput, async (req, res, next) => {    
// userRouter.post("/users", async (req, res, next) => {        
    try {
        // add new user
        const { name, password, email } = req.body;        
        const hashedPassword = await createHash(password); // hash password                               
        let id = uuidv4();
        let newUserWithHashedWP = { id, name, password: hashedPassword, email }; // new user object with auto generated id, name, hashed password and email
        let newUserNoPW = { id, name, email }; // new user object with auto generated id, name and email
        await db.add(usersDbFile, newUserWithHashedWP); // call add function from dbHandler
        return res.status(201).send(newUserNoPW);
    } catch (err) {
        console.error("are we here?", err);
        return next(err);
    }
})

// middleware to handle all other routes are in the authRouter.js

export default userRouter;