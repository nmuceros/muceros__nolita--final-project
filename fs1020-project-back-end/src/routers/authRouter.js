import express from "express"; 
import validateData from "../functions.js"; // import function
import jwt from "jsonwebtoken";
import * as db from "../dbHandler.js";
import path from "path";
import argon2 from "argon2";

// database file location
const usersDbFile = path.resolve(process.env.DB_USERS_LOCATION); // resolve method normalizes the path format based on the current OS

const authRouter = express.Router();

// checks invalid properties/data
const validateAuthInput = (req, res, next) => {
    const authValidProp = ["email", "password"]; // required properties
    let errorMessages = validateData("users", authValidProp, req.body);
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


// POST /auth route
authRouter.post("/api/auth", validateAuthInput, async (req, res) => {
    try {
        const { email, password } = req.body;
        // find the email in users.json
        const userFound = await db.getItemById("email", email, usersDbFile);
        if (userFound) {
            const passwordMatch = await verifyPassword(userFound.password, password);
            if ( passwordMatch ) {      
                const token = jwt.sign({ email }, process.env.JWT_SECRETKEY, {expiresIn: '1m'}); // this creates a new token, passing in data
                return res.status(200).json( {token: token} ); // we return back an object that has the token property with the value of token
            }    
        } 
        return res.status(401).json({message: "incorrect credentials provided" });    
    } catch (err) {
        console.error(err);
    }    
});

// middleware to handle all other routes
authRouter.get("*", (req, res, next) => {
    next(err);
  });
 
authRouter.post("*", (req, res, next) => {
    next(err);
  });

export default authRouter;