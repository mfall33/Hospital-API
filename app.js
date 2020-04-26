const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

let app = express();

const PORT = process.env.PORT;

const apiRoute = app.route("/api");
const routes = require("./routes");

app.use("/api", routes);

app.listen(PORT, () => {
  console.log("App initialized on port " + PORT);
});
