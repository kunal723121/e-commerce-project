import  express  from "express";
import mongoose from "mongoose";
import loginRouter from "./Router/loginRouter.js";
import productRouter from "./Router/productRouter.js";
import cors from 'cors'
import cartRouter from "./Router/cartRouter.js";
import path from 'path'
let app=express();
app.use(cors());
// app.use(express.static(path.join(process.cwd(),'src')))
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({
    limit:'50mb',
    extended:true
}))
// http://localhost:8080/login
app.use("/login",loginRouter)
app.use("/cart",cartRouter)
mongoose.connect('mongodb://localhost:27017/all').then(()=>{
    console.log("server connected")
}).catch(()=>{
    console.log("server not connected")
})
app.setMaxListeners(20);
// http://localhost:8080/product
app.use('/product',productRouter)
app.listen(8080,(err)=>{
    if(err) throw err
    console.log("server is running")
})