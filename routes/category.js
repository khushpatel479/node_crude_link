const express = require("express")
const {categoryModel} = require("../modules/category")
const cat = express.Router()
cat.post("/",async(req,res)=>
{
    let category = new categoryModel({
        name : req.body.name,
        icon : req.body.icon,
        color : req.body.color

    })
    category = await category.save()
    console.log(category)
    res.send(category)
    res.send("post")
})



cat.get("/",(req,res)=>
{
    res.send("category...")
})
module.exports = cat