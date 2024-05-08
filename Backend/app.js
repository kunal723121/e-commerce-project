import  express  from "express";
import mongoose from "mongoose";
import loginRouter from "./Router/loginRouter.js";
import productRouter from "./Router/productRouter.js";
import cors from 'cors'
import path from 'path'
let app=express();
app.use(express.json())
app.use(cors());
app.use(express.static(path.join(process.cwd(),'src')))
app.use(express.urlencoded({
    extended:true
}))
// mongoose.connect('mongodb://localhost:27017').then(()=>{
//     console.log("server connected")
// }).catch(()=>{
//     console.log("server not connected")
// })
// http://localhost:8080/login
app.use("/login",loginRouter)
// http://localhost:8080/product
app.use('/product',productRouter)
app.listen(8080,(err)=>{
    if(err) throw err
    console.log("server is running")
})