const express = require("express")
const user  = express.Router()

const {User} = require("../modules/users")

user.post("/",async(req,res)=>
{
    let usr = new User({
        name:req.body.name,
        image:req.body.image,
        contact:req.body.contact,
        email:req.body.email,
        password:req.body.password
    })
    usr = await usr.save()
    res.send(usr)
})

user.get("/",async(req,res)=>
{
    let usr = await User.find()
    res.send(usr)
})
user.get("/:id",async(req,res)=>
{
    let usr = await User.findById(req.params.id)
    res.send(usr)

})
user.put("/:id",async(req,res)=>{
    let usr = await User.findByIdAndUpdate(req.params.id,{
        name:req.body.name||User.name,
        image:req.body.imag||User.image,
        contact:req.body.contact||User.contact,
        email:req.body.email||User.email,
        password:req.body.password||User.password,


    },{new:true},)
    res.send("ok")
})
user.delete("/:id",(req,res)=>
{
    let del =  User.findByIdAndDelete(req.params.id)
    res.send("DELETED")
})


module.exports = user
