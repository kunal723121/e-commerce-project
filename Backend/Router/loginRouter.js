import express from 'express'
import Log from '../model.js'
import mongoose from 'mongoose'
import allProductsConnection from 'mongoose' 
import userConnection from 'mongoose'
import mongoose1 from 'mongoose'
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


// loginRouter.post("/login", async (req, resp) => {
//     try {
//         const { username, password } = req.body;

//         // Disconnect from the current database (if connected)
//         await mongoose.disconnect();

//         // Create connections to the Allproducts and user-specific databases
//         const x = allProductsConnection.createConnection('mongodb://localhost:27017/Allproducts');
//         const y = userConnection.createConnection(`mongodb://localhost:27017/${username}`);

//         // Wait for both connections to be established
//         await Promise.all([x,y]);

//         // Authenticate user
//         const user = await Log.findOne({ username: username, password: password });

//         if (!user) {
//             return resp.status(401).json({ msg: "Invalid username or password" });
//         }

//         return resp.status(200).json({ msg: "Login successful" });
//     } catch (error) {
//         console.error("Error during login:", error);
//         return resp.status(500).json({ msg: "Internal server error" });
//     }
// });




// http://localhost:8080/login/logout

loginRouter.put("/logout",async(req,resp)=>{
   
   resp.send("done")
})


export default loginRouter