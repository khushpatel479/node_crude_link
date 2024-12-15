let mongoose = require("mongoose")
let Usermd = mongoose.Schema({
    name:{
        type:String,
    },
    image:{
        type:String,
    },
    contact:{
        type:Number,
    },
    email:{
        type:String,
        require :true
    },
    password:{
        type:String,
        require:true
    }
})

exports.User = mongoose.model("user",Usermd)