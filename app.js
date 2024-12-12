const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")
const port = 3300
const api = process.env.API_URL 
const user = require("./routes/users")
const category = require("./routes/category")
app.use(express.json())
app.use("/users",user)
app.use(`${api}/category`,category)

mongoose.connect(process.env.CONNECTION_STRING,{
    dbName : "eshop"

}).then(()=>
{
    console.log("Connected")
}).catch((error)=>
{
    console.log(error)
})
app.listen(port,()=>
{
    console.log("localhost:3300")
})