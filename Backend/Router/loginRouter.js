import express from 'express'
import Log from '../model.js'
import jwt from 'jsonwebtoken'
import store from './store.js'

let loginRouter=express.Router()

// http://localhost:8080/login/register
loginRouter.post("/register",async(req,resp)=>{
    let {username,password}=req.body
    let user=await Log.findOne({username:username})
    if(user)
    { 
        return resp.send({"msg":"user name exist,use another username"})
        
    }
    let newuser= new Log({username,password})
    newuser.save();
    resp.send({"msg":"done" ,newuser })
})

// http://localhost:8080/login/login
loginRouter.post("/login",async(req,resp,next)=>{
    let {username,password}=req.body;
    store.uname=username;
    let user=await Log.findOne({username:username,password:password})
    if(!user)
    {
        return resp.send({"msg":0})
        
    }
    else
    {
    return resp.send({"msg":1})
    }
})


// http://localhost:8080/login/logout

loginRouter.put("/logout",async(req,resp)=>{
   resp.send("done")
//    await mongoose.disconnect();
})


export default loginRouter