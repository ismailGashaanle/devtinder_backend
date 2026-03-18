  
  const express = require("express");

const ConnectDB=require("./config/database")
const User=require("./models/User")


const CookieParser=require("cookie-parser")
require("dotenv").config()

 
   const app=express()  // intialize express app
     app.use(express.json());

     app.use(CookieParser());
     //routes/
const authRouter = require("./routers/auth")
const profileRouter = require("./routers/profile")
const requestRouter = require("./routers/requests")
    
    
port=process.env.PORT


   //use routes
   app.use("/",authRouter);
   app.use("/",profileRouter);
   app.use("/",requestRouter);



    ConnectDB().then(()=>{
        console.log("connection successfully database")
      app.listen(7777,(req,res)=>{
        console.log("server running port 77 ")
      })

    }).catch(()=>{
       console.log("not connected database ...")
    });


 