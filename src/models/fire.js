const mongoose = require("mongoose");
const fireSchema=new mongoose.Schema({
    fire: Boolean,    
})
const fireModel=mongoose.model(
    "fire",fireSchema
)


module.exports=fireModel