import { Event } from "../models/event.model";

export const newEvent = async(req,res,next)=>{
    try {
        const {title, description, location, date, user} = req.body;
        if(!title|| !description|| !location|| !date){
            return res.json({
                msg:"All fields are required",
                status:false,
            })
        }
        const createEvent = await Event.create({
            title,
            description,
            location,
            date,
            organiser:user._id,
        })
        if(!createEvent){
            return res.json({
                msg:"Error creating the event",
                status:false,
            })
        }
        return res.json({
            msg:"New Evemt created",
            status:true,
            user:user,
            event:createEvent
        })      
    } catch (error) {
        next(error);
    }
} 