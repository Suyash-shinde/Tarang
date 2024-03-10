import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
const checkAuth=async(req,res,next)=>{
    try {
        const incomingAccessToken= req.cookies?.accessToken;
    const incomingRefreshToken= req.cookies?.refreshToken;
    if(!incomingAccessToken && !incomingRefreshToken){
        return res.json({msg:"Login expired", status:false});
    }
    if(!incomingAccessToken && incomingRefreshToken){
        
            const decodedRefreshtoken= jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET);
            const user = await User.findById(decodedRefreshtoken?._id);
        if(!user){
            return res.json({msg:"Invalid Token", status:false});
        }
        if(incomingRefreshToken!==user?.refreshToken){
            return res.json({msg:"Refresh token expired or used", status:false});
        }
        const options={
            httpOnly:true,
            secure:true,
        }
        const newaccessToken = user.generateAccessToken()
        const newrefreshToken = user.generateRefreshToken()

        user.refreshToken = newrefreshToken
        await user.save({ validateBeforeSave: false })

        return res
        .cookie("accessToken",newaccessToken,options)
        .cookie("refreshToken",newrefreshToken,options)
        .json(
            {
                msg:"Access Token Refreshed",
                user:req.user,
                accessToken:newaccessToken,
                refreshToken: newrefreshToken,
                status:true,
            }
        )
    }
 
    const decodedToken= jwt.verify(incomingAccessToken,process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
        if(!user){
            throw new Error();
        }
        if(user.accessToken!==incomingAccessToken){
            return res.json({msg:"unauthorized request", status:false});
        }
        req.user=user;
        next();
    } catch (error) {
        res.status(false).json({msg:"Invalid Token"});
    }
}
