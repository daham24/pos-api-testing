const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config(); // Added .config() to invoke dotenv

const port = process.env.SERVER_PORT || 3000;
const app = express(); // Added parentheses to initialize express

const userRoute = require("./routes/UserRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Added parentheses to invoke bodyParser.json()

try {
  mongoose.connect("mongodb://127.0.0.1:27017/posSystem");

  app.listen(port, () => {
    console.log(`Server Started & Running Port ${port}`);
  });
} catch (error) {
  console.log(error);
}

app.get("/test-api", (req, res) => {
  return res.json({ message: "Server Started!" });
});

app.use("/api/v1/users", userRoute);
