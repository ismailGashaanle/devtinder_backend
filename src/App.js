  
  const express = require("express");
const { adminAuth } = require("./middlewares/Auth");
const ConnectDB=require("./config/database")
const User=require("./models/User")
require("dotenv").config()
 
   const app=express()  // intialize express app
     app.use(express.json());
    
port=process.env.PORT
    //  app.get("/user/:userId",(req,res)=>{

    //     const userId=req.params

    //     res.send({
    //         userId,
    //         firstname:"ismail ahmed",
    //         lastname:"hassan",
    //         phone:"09837333",
    //         email:"ismail@gmail.com",
    //         password:"3I!@en5j;/B"
    //     })

    //  })




    //    app.post("/user",(req,res)=>{

    //     res.send({
    //         firstname:"ismail ahmed",
    //         lastname:"hassan",
    //         phone:"09837333",
    //         email:"ismail@gmail.com",
    //         password:"3I!@en5j;/B"
    //     })

    //  })


    //  app.get(/ab?c/,(req,res)=>{
    //       res.send("sjshghsghshg")
    //  })



    // app.use("/router",router_handler1,rh2,rh3,rh4)


    
    // app.use(
    //     "/user",
    //     (req,res,next)=>{
    //         console.log("middleware 1")
    //       //  res.send("response 1")
    //         next();
    //     },
    //     (req,res,next)=>{
    //         console.log("middleware 2")
    //       //  res.send("2nd response")
    //         next()
    //     },
        
    //     (req,res,next)=>{
    //         console.log("middleware 3")
    //         res.send("3rd response")
    //         next()
    //     }
    // )


    // app.get("/Admin/GetAllData" ,adminAuth,(req,res)=>{
    
    //  //   throw new Error("error handling")
    //  res.send("get data admin")
             

             
    // })
    // app.get("/user/getUser",(req,res)=>{
    //     const token="ab";
    //     const isUthroizedUser=token==="abc"
    //     if(!isUthroizedUser){
    //         res.status(500).json({
    //             message:"is Unthorized user"
    //         })
    //     }
    //     else{
    //         res.status(300).json({
    //             firstName:"ismail ahmed",
    //             lastname:" hassan",
    //             phone:"0637856383"

    //         })
    //     }
    // })


// 
    // app.use("/",(err,req,res,next)=>{
        
    //     if(err){
    //         res.status(500).json({
    //             message:"something wrong"
    //         })
    //     }

    // })



    //    app.post("/signup",async(req,res)=>{

    //         const user = new User({
                        
    //                 //    _id:("ObjectId 69b68ea2488aaaee43a88281"),
    //                     firstName:"ismail ahmed",
    //                     lastName:"oday",
    //                     email:"ismail4a@gmail.com",
    //                     Age:23,
    //                     Gender:"male",
    //                     password:"3bbsss6b"

    //                 })
    //     try{
          
    //     await user.save()
    //        res.send("successfully create",)
            

    //     }catch(err){
    //         res.status(500).json({
    //             error: err.message
    //         })
    //     }
    // })



    
    app.post("/signup",async(req,res)=>{

        console.log(req.body)
        const data=req.body
        const user= new User (data);
        
        try{

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


  
    ConnectDB().then(()=>{
        console.log("connection successfully database")
      app.listen(7777,(req,res)=>{
        console.log("server running port 77 ")
      })

    }).catch(()=>{
       console.log("not connected database ...")
    });


 