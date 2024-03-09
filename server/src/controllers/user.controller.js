import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
export const Register = async(req,res,next)=>{
    try {
    const{ firstname, lastname,password,email,gender, mobile, volunteertype, timeavailability} =  req.body;
    const findMobile= User.findOne({mobile});
    const findEmail= User.findOne({email});
    if(findMobile){
        return res.json({msg:"Mobile Number already in use", status:false});
    }
    if(findEmail){
        return res.json({msg:"Email already in use", status:false});
    }
    const encryptedPassword=bcrypt.hashSync(password,10);
    const send = await User.create({
        firstname,
        lastname,
        password:encryptedPassword,
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