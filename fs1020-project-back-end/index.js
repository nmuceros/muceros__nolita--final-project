import express from "express"; 
import contactRouter from "./src/routers/contactRouter.js";
import userRouter from "./src/routers/userRouter.js";
import authRouter from "./src/routers/authRouter.js";
import errorHandler from "./src/middleware/errorHandler.js"; // middleware to handle all other errors
// import jwt from "jsonwebtoken";


const app = express(); 

const port = process.env.PORT; // port required for this project

app.use(express.json()); // Express JSON parsing middleware

// mount route
app.use(userRouter);
app.use(contactRouter);
app.use(authRouter);

// app.use(jwt({secret: process.env.JWT_SECRETKEY, algorithms: ['HS256']}));

app.use(errorHandler);

app.listen(port, () => console.log(`API server ready on http://localhost:${port}`));