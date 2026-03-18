
const validator =require("validator")

const ValidateSignUp =(req)=>{

    const {firstName,lastName,password,email}=req.body
    if(!firstName || !lastName){
        throw new Error("please fill Name")
    }
    if(!validator.isEmail(email)){
        throw new Error("please fill valid email")
    }

    if(!validator.isStrongPassword(password)){
        throw new Error("invalid password must be password contain 8 characters")
    }


}



// validate login

const ValidateLogin=(req)=>{
    const {email,password}=req.body

    if(!validator.isEmail(email)){
        throw new Error("invalid email")
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("invalid password")
    }

}


module.exports={ValidateSignUp,ValidateLogin}