import mongoose from "mongoose";
let schema=mongoose.Schema({
    id:{
        type:Number,
        require:true
    },
    buyername:{
        type:String,
        require:true
    },
    sellername:{
        type:String,
        require:true
    },
    qty:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    street:{
        type:String,
        require:true
    },
    landmark:{
        type:String,
        require:true
    },
    pincode:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    phnnumber:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    status: {
        type: String,
        required: true,
        default: "pending" // Setting a default status
    }
})
let Cart=mongoose.model('cart',schema);
export default Cart