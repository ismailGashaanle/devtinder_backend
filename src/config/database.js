
const express=require("express")
const mongoose=require("mongoose")
   require("dotenv").config();


   const ConnectDB= async ()=>{
    await mongoose.connect(process.env.MONGO_URL);
   }


   module.exports=ConnectDB;