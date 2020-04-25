const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

let app = express();



const port = process.env.PORT;
var Hospital = require("./models/hospital");

mongoose.connect(process.env.DBPATH)
  .then(function(data){
    console.log("DB Connection established...");
  })
  .catch((err) => {
  	if(err) throw err;
  });

  function logError(err){
    console.log(err);
  }



const apiRoute = app.route("/api");
const routes = require("./routes");

app.use("/api", routes);

app.listen(port, () => {
  console.log("App initialized on port " + port);
});
