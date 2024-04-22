import {mongoose, Schema} from "mongoose";
const eventSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    organiser:{
        type:Schema.Types.ObjectId,
        ref:'Organiser'
    },
},
    {
        timestamps:true,
    })
    
    export const Event = mongoose.model('Event',eventSchema);
