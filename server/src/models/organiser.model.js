import mongoose,{Schema} from "mongoose";
const organiserSchema = new Schema({
    name:{
        type: String,
        required: true,
        lowercase: true,
        unique:true,
    },
    domain:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        lowercase:true,
        required:true,
    }
})

export const Organiser = mongoose.model("Organiser", organiserSchema); 
