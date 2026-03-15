
const mongoose=require("mongoose");


const userShema= new mongoose.Schema({

    firstName:{
        type:String,
        maxLength:45,
        minLength:3
    },
    lastName:{
        type:String,
        maxLength:45,
        minLength:2
    },
    Age:{
       type:Number,
       min:18
    },
    Gender:{
         type:String,
        enum:["male","female"]
    },

    // phone:{
    //     type:Number,
    //      max:13,
    //      min:9

    // },

    photoURL:{
        default:"sawir",
        type:String
    },

    email:{
        type:String,
        maxLength:50,
        minLength:5,
        unique:[true,"all ready exit email"]
    },
    password:{
        type:String,
       

    }

},{timestamps:true})


// create model

module.exports=mongoose.model("User",userShema)