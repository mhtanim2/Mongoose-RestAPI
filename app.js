const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./src/routes/userRoutes");
const userMiddleware = require("./src/middleware/userMiddleware");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(userMiddleware.logged);

// DB Connection

let URL = "mongodb://localhost:27017/school";
let OPTION = {autoIndex: true };
mongoose.connect(URL, OPTION, (error) => {
  console.log("Connection Success");
  console.log(error);
});
app.use("/api/v1", router);

app.use("*", (req, res) => {
  res.status(404).json({
    request: "He server is error",
  });
});

module.exports = app;
