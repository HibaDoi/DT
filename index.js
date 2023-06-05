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
    console.log(body.humidity, body.temperature, body.timestamp)
    data.save()
    
    res.status(200).json({
      message:"data has been received"
    })
  });
  app.post("/fire", async (req, res) => {
    console.log(body);
    let body = req.body;
    const data2 =new fireModel(body)
    data2.save()
    
    res.status(200).json({
      message:"data has been received"
    })
  });
  app.post('/test', (req, res) => {
    const { data } = req.body;
    console.log(`data: ${data}`);
    res.send('success');
  });
  app.post('/tt', (req, res) => {
    
    console.log('data');
    
  });
  app.listen(PORT, () => {
    console.log("Listening on port", PORT)
    connect()
  });
