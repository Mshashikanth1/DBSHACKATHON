const mongoose=require("mongoose")

const log_schema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:String,

    stock:{
        type:String,
        type:String,
        type:String
    }

})

var model=mongoose.model("Person",log_schema)
module.exports=model