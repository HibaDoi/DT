const mongoose = require("mongoose");
const soilSchema=new mongoose.Schema({
    Soil: Number,
    timestamp: String,    
})
const soilModel=mongoose.model(
    "soil",soilSchema
)


module.exports=soilModel