
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


module.exports={
    adminAuth
}