import mongoose from "mongoose";
let productschema=mongoose.Schema({
    username:{
        type: String,
        require:true
    },
    id:{
        type: Number,
        require:true
    },
    name:
    {
        type: String,
        require:true
    },
    photo:{
        type: String,
        require:true
    },
    price:{
        type: Number,
        require:true
    },
    details:{
        type: String,
        require:true
    },
    date:{
        type:Date,
        default:Date
    }
})
let Product=mongoose.model("product",productschema)

export default Product