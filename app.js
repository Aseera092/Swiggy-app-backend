const express=require("express")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const cors=require("cors")
const loginModel = require("./models/Admin")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://aseera:aseera@cluster0.x0tifel.mongodb.net/swiggydb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/test",(req,res)=>{
    res.json({"status":"success"})
})

app.post("/AdminSignUp",(req,res)=>{
    let input=req.body
    let hashedpassword=bcrypt.hashSync(input.password,12)
    //console.log(hashedpassword)
    input.password=hashedpassword
    console.log(input)
    let result=new loginModel(input)
    result.save
    res.json({"status":"success"})
    
})
app.listen(3031,()=>{
    console.log("server started")
})
