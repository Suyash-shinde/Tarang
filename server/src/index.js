import express from "express";

const app=express();
const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`App is listeing on port: http://localhost:${port}`);
})