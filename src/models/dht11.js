const mongoose = require("mongoose");
const dht11Schema=new mongoose.Schema({
    temperature : Number,
    humidity : Number,
    timestamp: String,

})

const dht11Model=mongoose.model(
    "dht11",dht11Schema
)


module.exports=dht11Model