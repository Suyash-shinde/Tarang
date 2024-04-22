import { Event } from "../models/event.model.js";

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
            msg:"New Event created",
            status:true,
            user:user,
            event:createEvent
        })      
    } catch (error) {
        next(error);
    }
} 

export const getAllEvents=async(req,res,next)=>{
    try {
        const events= await Event.find().populate('organiser').exec();
        if(!events){
            return res.json({
                msg:"Error while fetching data",
                status:false,
            })
        }
        return res.json({
            msg:"Fetched events sucesfully",
            status:true,
            events,
        })
    } catch (error) {
        next(error);
    }
}

export const getDetails=async(req,res,next)=>{
    try{
        const event = await Event.findById(req.params.eventId);
        const sendEvent={
            _id:event._id,
            title:event.title,
            description:event.description,
            location:event.location,
            date:event.date,
        }
        return res.json(sendEvent);
    }
    catch(error){
        next(error);
    }
}