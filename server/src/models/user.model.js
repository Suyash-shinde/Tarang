import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    firstname:{
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
    mobile:{
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
    volunteertypes:{
        type:[String],
    },
    timeavailabilities:{
        type:[String],
    }

})

export const User = mongoose.model("User", userSchema);