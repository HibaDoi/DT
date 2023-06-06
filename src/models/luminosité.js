const mongoose = require("mongoose");
const lightSchema=new mongoose.Schema({
    light: Number,
    timestamp: String,    
})
const lightModel=mongoose.model(
    "light",lightSchema
)


module.exports=lightModel