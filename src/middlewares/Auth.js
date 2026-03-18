const jwt = require("jsonwebtoken")
const User = require("../models/User")
const adminAuth=(req,res,next)=>{
    const token="abc";
    const isAuthorizedAdmin=token==="abc";

    if(!isAuthorizedAdmin){
        res.status(500).json({
          message:"not Authorized Admin"
        })
    }
    else{
        next(); 
    }
     

}


const UserAuth=async(req,res,next)=>{

    //read cookies from req.cookies
    // validate token
    //validate and check user

   try{
     const cookies=req.cookies;
    const {token}=cookies;
    if(!token){
        throw new Error("invalid tokein !!")
    }

    const decoded = await jwt.verify(token,process.env.DEVSECRET_KEY_SECURE_DATA);

    const {_id}=decoded;

    const  user = User.findById(_id);
    if(!user){
        throw new Error("user not found")
    }


   req.user=user;
   next();
   }catch(Err){
    res.send("Error : " + Err.message)
   }
 


}

module.exports={
    adminAuth,
    UserAuth
}