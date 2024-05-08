import mongoose from "mongoose";
let lg_sch=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        default:Date
    }
})
let Log=mongoose.model('userlogin',lg_sch)
export default Log