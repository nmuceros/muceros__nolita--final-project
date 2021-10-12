// Middleware to verify token
import jsonwebtoken from "jsonwebtoken";

export default (req, res, next) => {
    const authHeader = req.headers["authorization"];
    // extract the second part of the Authorization Header Value ("Bearer JWT")
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) { // if null, sends back with an error message - status code 403 (forbidden)
        return res.status(403).send({message: "token not provided"});
    }
    try {
        // const data = jsonwebtoken.verify(token, "shhhhh"); // validates token
        const data = jsonwebtoken.verify(token, process.env.JWT_SECRETKEY); // validates token
        req.user = data; // creates a custom property on the request object
        next();
    } catch (err) { // if invalid, sends back with an error message - status code 403 (forbidden)
        console.error(err);

        // if (err.message == "jwt expired") return res.status(403).json({message: "token expired"}); // customize expired token message
        
        return res.status(403).send({message: err.message});
    }
};