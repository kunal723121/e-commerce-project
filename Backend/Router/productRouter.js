import Express from "express";
import Product from "../productmodel.js";
import store from "./store.js";
import Cart from "../cartmodel.js";
let productRouter=Express.Router()
// http://localhost:8080/product/all
productRouter.get('/all',async (req,resp)=>{
    let uname=store.uname;
    console.log(uname)
    let product=await Product.find({username:uname});
    resp.send(product)
    // resp.status(200).json(product)
})

// http://localhost:8080/product/allproducts
productRouter.get('/allproducts',async (req,resp)=>{
    let uname=store.uname;
    // console.log(uname)
    let product=await Product.find({username:{$ne:uname}});
    resp.send(product)
    // resp.status(200).json(product)
})

// http://localhost:8080/product/create
productRouter.post('/create',async(req,resp)=>{
    let username=store.uname;
    const {id,name,photo,price,details}=req.body
    let product=await Product.findOne({id:id})
    if(product)
    {
        return resp.send({"msg":"product already exist"})
    }
    product=new Product({username,id,name,photo,price,details})
    await product.save();
    resp.send({"msg":"product added"})
})

// http://localhost:8080/product/update
productRouter.put('/update/:id',async (req,resp)=>{
    let is=req.params.id;
    let username=store.uname;
    let product=await Product.findOne({id:is})
    if(!product)
    {
       return resp.send({"msg":"product is not available"})
    }
    let {name,photo,price,details}=req.body
    product=await Product.findOneAndUpdate({id:is},{username,is,name,photo,price,details},{new:true})
    resp.send({"msg":"update done",product})
    product.save();
})

// http://localhost:8080/product/delete
productRouter.delete('/delete/:id',async (req,resp)=>{
    let is=req.params.id;
    let product=await Product.findOne({id:is})
    if(!product)
    {
       return resp.send({"msg":"product is not available"})
    }
    let {username,id,name,photo,price,details}=req.body
    product=await Product.deleteMany({id:is})
    resp.send({"msg":"delete done"})
    
})

// http://localhost:8080/product/all
productRouter.get('/all/:id',async (req,resp)=>{
    let is=req.params.id;
    let product=await Product.findOne({id:is})
    if(!product)
    {
       return resp.send({"msg":0})
    }
    product=await Product.findOne({id:is})
    resp.send(product)
    
})

// http://localhost:8080/product/cart
// productRouter.post('/cart',async(req,resp)=>{
//     let buyername=store.uname
//     let {id,sellername,qty,price,street,landmark,pincode,phnnumber,city,state}=req.body
//     let item=new Cart({id,buyername,sellername,qty,price,street,landmark,pincode,phnnumber,city,state})
//     await item.save();
//     resp.send({"msg":"order placed"})
// })

export default productRouter