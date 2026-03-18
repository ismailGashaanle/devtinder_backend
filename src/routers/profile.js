
const express = require("express");
const jwt=require("jsonwebtoken")
const User=require("../models/User")
const { adminAuth, UserAuth } = require("../middlewares/Auth");
const profileRouter = express.Router();


     profileRouter.get("/profile",async(req,res)=>{

      const cookies=req.cookies;

      const {token}=cookies;

      if(!token){
        throw new Error("invalid token")
      }
        
      const decoded= jwt.verify(token,process.env.DEVSECRET_KEY_SECURE_DATA);

      const {_id}=decoded;
      const user = await User.findById(_id);
      res.json({
        message:"user login successfully",
        user
      })

       

     })



module.exports = profileRouter;