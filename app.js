const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.get("/", (req, res) => {
    res.send("hi am root");
  });

  
  app.listen(5000, () => {
    console.log("server is started");
  });
  