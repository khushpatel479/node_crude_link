const mongoose = require("mongoose")
const ch = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        icon:{
            type:String,
        },
        color:{
            type:String,
        }
    }
)
exports.categoryModel = mongoose.model('category',ch)