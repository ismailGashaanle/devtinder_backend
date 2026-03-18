

const express = require("express")
 const requestRouter=express.Router();
 const User=require("../models/User")
 const { adminAuth, UserAuth } = require("../middlewares/Auth");

   requestRouter.post("/connectionRequest",UserAuth,async(req,res)=>{
   try{
    const user=req.user
 
    const {_id}=user
   const logginUser = await User.findOne(_id)
     res.send("request connection user  : " + logginUser.firstName)
   }catch(Err){
    res.send("error : " + Err.message)
   }
   })



 module.exports= requestRouter