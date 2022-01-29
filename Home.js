const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")

const cors=require("cors")

const reg=require("./Customer.routes")

const app=express()

 mongoose.connect("mongodb://localhost:27017/DBS_db",{useNewUrlParser:true}).then(()=>{
     console.log("DB connectd Successfully")
     }).catch((err)=>{
     console.log("DB connection Failed")
 })

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.json())

app.use("/api",reg)

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(3000,()=>{
    console.log("Successfully Connected")
})