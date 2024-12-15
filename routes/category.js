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


cat.get("/",async(req,res)=>
    {
        let catelist = await categoryModel.find()
        if(!catelist)
        {
            res.status(500).json({success:false})
        }
        res.send(catelist)
    })

    cat.get("/:id",async(req,res)=>
    {
        let cat = await categoryModel.findById(req.params.id)
        res.send(cat)
    })
    cat.put("/:id",async(req,res)=>
    {
        let um = await categoryModel.findByIdAndUpdate(req.params.id,
        {
            name:req.body.name,
            icon:req.body.icon,
            color:req.body.color,
        },
        {new:true}
    )
        res.send(um)
    })
    cat.delete("/:id",(req,res)=>
    {
        let cat = categoryModel.findByIdAndDelete(req.params.id)
        res.send("deleted")
    })

    module.exports = cat
