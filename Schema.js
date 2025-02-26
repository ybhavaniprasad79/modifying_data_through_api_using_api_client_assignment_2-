const mongoose=require("mongoose")


const MenuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    }
})

const MenuItem=mongoose.model("MenuItem",MenuSchema)

module.exports={MenuItem}