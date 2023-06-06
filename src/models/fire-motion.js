const mongoose = require("mongoose");
const fireSchema=new mongoose.Schema({
    fire: Number,
    motion:Number,
    timestamp: String,    
})
const fireModel=mongoose.model(
    "fire",fireSchema
)


module.exports=fireModel