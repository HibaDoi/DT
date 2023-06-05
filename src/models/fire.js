const mongoose = require("mongoose");
const fireSchema=new mongoose.Schema({
    fire: Number,    
})
const fireModel=mongoose.model(
    "fire",fireSchema
)


module.exports=fireModel