import Express from "express";
import Product from "../productmodel.js";
let productRouter=Express.Router()

// http://localhost:8080/product/all
productRouter.get('/all',async (req,resp)=>{
    let product=await Product.find();
    resp.send(product)
    // resp.status(200).json(product)
})

// http://localhost:8080/product/create
productRouter.post('/create',async(req,resp)=>{
    const {id,name,photo,price,details}=req.body
    let product=await Product.findOne({id:id})
    if(product)
    {
        return resp.send({"msg":"product already exist"})
    }
    product=new Product({id,name,photo,price,details})
    await product.save();
    resp.send({"msg":"product added"})
})

// http://localhost:8080/product/update
productRouter.put('/update/:id',async (req,resp)=>{
    let is=req.params.id;
    let product=await Product.findOne({id:is})
    if(!product)
    {
       return resp.send({"msg":"product is not available"})
    }
    let {id,name,photo,price,details}=req.body
    product=await Product.findOneAndUpdate({id:is},{id,name,photo,price,details},{new:true})
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
    let {id,name,photo,price,details}=req.body
    product=await Product.deleteMany({id:is})
    resp.send({"msg":"delete done"})
    
})

// http://localhost:8080/product/all
productRouter.get('/all/:id',async (req,resp)=>{
    let is=req.params.id;
    let product=await Product.findOne({id:is})
    if(!product)
    {
       return resp.send({"msg":"product is not available"})
    }
    product=await Product.findOne({id:is})
    resp.send(product)
    
})

export default productRouter