import { User } from "../models/user.model.js";

export const Register = async(req,res,next)=>{
    try {
    const{ firstname, lastname,password,email,gender, mobile, volunteertype, timeavailability} =  req.body;
    const send = await User.create({
        firstname,
        lastname,
        password,
        email,
        gender,
        mobile,
        volunteertype,
        timeavailability,
    })
    if(!send){
        return res.json({msg:"Error while creating user", status:false});
    }
    return res.json({msg:"USer Registered", status:true});
    } catch (error) {
        next(error);
    }
}