import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    username:{
        type: String,
        required:true,
    },
})

export const User = mongoose.model("User", userSchema);