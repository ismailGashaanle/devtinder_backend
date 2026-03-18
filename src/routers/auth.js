

const express = require("express");
const AuthRouter= express.Router();

const jwt=require("jsonwebtoken")
const Bcrypt= require("bcrypt")

const {ValidateSignUp,ValidateLogin} = require("../utils/Validation.Helper")
const User=require("../models/User")

AuthRouter.post("/signup",async(req,res)=>{


       
        console.log(req.body)
       
        
        try{
             // validate data
        ValidateSignUp(req)

    const    {firstName,lastName,email,password} = req.body

        //encrypt password

        const PasswordHash = await Bcrypt.hash(password,10);

        
        //submit data
         const data=req.body
        const user= new User ({
            firstName,
            lastName,
            email,
            password:PasswordHash
        });

            const userdata= await user.save();
            res.status(201).json({
                message:"created successfully",
                data:userdata
            })
            
        }catch(Err){
            res.status(500).json({
                message:`err ${Err.message}`
            })
        }

    })


    AuthRouter.post("/login",async(req,res)=>{
        try{
            ValidateLogin(req)
          
            const {email,password}=req.body;

            const user= await User.findOne({email:email})

            if(!user){
                throw new Error("invalid credentials");
            }

            const isValidPassword = user.validatePassword(password)
            if(!isValidPassword){
                throw new Error("invalid credentails")
            }

            
        
            const token= await user.getJWT();

            
    /// you must be a know to send cookeis in token
        res.cookie("token",token,{expires:new Date(Date.now() + 8 * 360000 )})









            res.send("successfully login")

        }catch(Err){
            res.send("Error : " + Err.message)
        }
    })




module.exports=AuthRouter