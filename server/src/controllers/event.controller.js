import { Event } from "../models/event.model.js";
import { Organiser } from "../models/organiser.model.js";

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
            expired:false,
        })
        const findOwner = await Organiser.findById(user._id);
        findOwner.events.push(createEvent._id);
        await findOwner.save({validateBeforeSave:false});
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
        const events= await Event.find({expired:false}).populate('organiser').exec();
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

export const handleEntry=async(req,res,next)=>{
    try {
        const {userId,eventId} =req.body;
        const findEvent = await Event.findById(eventId);
        console.log(userId);
        const exists = await findEvent.participants.find(function(e){return e==userId});
        if(exists!==undefined){
            return res.json({
                msg:"Already Particiapted in this event",
                status:false,
            })
        }
        await findEvent.participants.push(userId)
        await findEvent.save({ validateBeforeSave: false });
        return res.json({
            msg:"Participated Sucessfully",
            status:true,
        })
    } catch (error) {
        next(error);
    }
}

export const getNGOEvents = async(req,res,next)=>{
    try {
        const {user} = req.body;
        const findOwner = await Organiser.findById(user._id).populate('events').exec();
        const events = findOwner.events;
        console.log(findOwner);
        return res.json({
            msg:"returned all NGO events",
            status:true,
            events,
        })
    } catch (error) {
        next(error)
    }
}

export const participantsList = async(req,res,next)=>{
    try {
        const event = await Event.findById(req.params.eventId).populate('participants').exec();
        return res.json(event);
    } catch (error) {
        next(error);
    }
}