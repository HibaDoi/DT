  const express = require("express");
  const app = express();
  const bodyParser = require('body-parser');
  const path = require("path");
  const fs = require("fs");
  const connect=require("./src/config/dbConfig")
  const dht11Model=require("./src/models/dht11")
  const fireModel=require("./src/models/fire")
  //constants
  const DB_PATH = path.resolve("db.json");
  const PORT = process.env.PORT || 8000;
  //middlewares
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  // routes
  app.get("/", async (req, res) => {
    console.log("api is being called")
    fs.readFile(DB_PATH ,"utf-8", (err, jsonString) => {
      if (err) return console.log(err);
      let values = JSON.parse(jsonString);
      res.status(200).json({
        totalValues: values.length,
        values,
      });
    });
    
    
  });
  app.post("/", async (req, res) => {
    const now = new Date();
    const formattedDate = now.toISOString();
    let body = req.body;
    const data =new dht11Model({humidity: body.humidity, temperature :body.temperature, timestamp :formattedDate});
    
    await data.save()
    
    res.status(200).json({
      message:"data has been received"
    })
  });
  app.post("/fire", async (req, res) => {
    let body = req.body;
    const data2 =new fireModel(body)
    await data2.save()
    
    res.status(200).json({
      message:"data has been received"
    })
  });


  app.listen(PORT || 8000, () => {
    console.log("Listening on port", PORT || 8000)
    connect()
  });
