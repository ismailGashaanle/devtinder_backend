  
  const express = require("express");

   const app=express()  // intialize express app


   app.use("/",(req,res)=>{
     res.send("hello from server")
   })

   app.listen(6000,(req,res)=>{
    console.log("running port 6000")
   })