import mongoose from "mongoose";
let productschema=mongoose.Schema({
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
})
let Product=mongoose.model("product",productschema)

export default Product