import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    mobileNumber:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
})

export const User = mongoose.model("User", userSchema);