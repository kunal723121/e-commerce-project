import express from 'express'
import Log from '../model.js'
import mongoose from 'mongoose'
import path from 'path'
let loginRouter=express.Router()

// http://localhost:8080/login/register
loginRouter.post("/register",async(req,resp)=>{
    let {username,password}=req.body
    await mongoose.disconnect()
    await mongoose.connect(`mongodb://localhost:27017/${username}`);
    let user=await Log.findOne({username:username})
    if(user)
    { 
        return resp.send({"msg":"already registered"})
        
    }
    let newuser= new Log({username,password})
    newuser.save();
    resp.send({"msg":"done" ,newuser })
})

// http://localhost:8080/login/register
loginRouter.post("/login",async(req,resp)=>{
    let {username,password}=req.body
    await mongoose.disconnect()
    await mongoose.connect(`mongodb://localhost:27017/${username}`);
    let user=await Log.findOne({username:username,password:password})
    if(!user)
    {
        return resp.send({"msg":0})
        
    }
    return resp.send({"msg":1})
})

// http://localhost:8080/login/logout

loginRouter.put("/logout",async(req,resp)=>{
   
   resp.send("done")
})


export default loginRouter