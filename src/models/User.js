
const mongoose=require("mongoose");
const validator = require("validator")
const jwt = require("jsonwebtoken")
const Bcrypt = require("bcrypt")

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
        enum:["male","female"],
        validator(value){
            if(!["male","female"].includes(value)){
                throw new Error("only male or female")
            }
        }
    },


    phone:{
        type:String,
         maxLength:13,
         minLength:9,
         validate(value){
            if(!validator.isMobilePhone(value)){
                throw new Error(" invalid phone number")

            }
         }


    },
    skills:{
        type:String,
        maxLength:10,
        lowercase:true,
        validate(value){
            if(!validator.isLength(value)>40){
                throw new Error("skills must be maximum 10")
            }
        }
    },

    photoURL:{
        default:"sawir",
        type:String
    },

    email:{
        type:String,
        maxLength:50,
        minLength:5,
        lowercase:true,
        unique:[true,"all ready exit email"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid Email ")
            }
        }
    },
    password:{
        type:String,
       
    
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("must be strong password contain 6 characters")
            }
        }
       

    }

},{timestamps:true})



//instance schema methods
userShema.methods.getJWT = async function(){
const user=this

const token = await  jwt.sign({_id:user._id},process.env.DEVSECRET_KEY_SECURE_DATA,{expiresIn:"1d"});

return token


}


//instance schema methods

userShema.methods.validatePassword = async function(passwordInputByUser){

    const user=this
    const hashPassword = this.password

     const isValidPassword =  await Bcrypt.compare(passwordInputByUser,hashPassword);

     return isValidPassword

}




// create model

module.exports=mongoose.model("User",userShema)