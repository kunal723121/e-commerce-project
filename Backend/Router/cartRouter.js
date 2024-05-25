import  Express  from "express";
import Cart from "../cartmodel.js";
import store from "./store.js";
let cartRouter=Express.Router()
// http://localhost:8080/cart/add
cartRouter.post('/add',async(req,resp)=>{
    let buyername=store.uname
    let {id,sellername,qty,price,street,landmark,pincode,phnnumber,city,state}=req.body
    let item=new Cart({id,buyername,sellername,qty,price,street,landmark,pincode,state,phnnumber,city})
    await item.save();
    resp.send({"msg":"order placed"})
})

//http://localhost:8080/cart/placedorder
cartRouter.get('/placedorder',async(req,resp)=>{
    let name=store.uname;
    let items=await Cart.find({buyername:name})
    resp.send(items)
})

//http://localhost:8080/cart/receivedorder
cartRouter.get('/receivedorder',async(req,resp)=>{
    let name=store.uname;
    let items=await Cart.find({sellername:name})
    resp.send(items)
})

//http://localhost:8080/cart/update
cartRouter.put('/update/:id',async(req,resp)=>{
    let uid=req.params.id
    let items=await Cart.findOneAndUpdate({id:uid,status:"pending"},{status:"order cancelled"},{new:true})
    resp.send(items)
})

//http://localhost:8080/cart/accept
cartRouter.put('/accept/:id',async(req,resp)=>{
    let uid=req.params.id
    let items=await Cart.findOneAndUpdate({id:uid,status:"pending"},{status:"order accepted"},{new:true})
    resp.send(items)
})


export default cartRouter