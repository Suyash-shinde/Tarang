import express from "express";
import  connectDb from "../src/db/index.js"
import {User} from "./models/user.model.js"
const app=express();
const port=process.env.PORT;
connectDb();
app.listen(port,()=>{
    console.log(`App is listeing on port: http://localhost:${port}`);
})