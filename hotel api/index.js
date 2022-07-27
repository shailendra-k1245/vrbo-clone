const express = require("express");

const hotelController = require("./controllers/hotel.controller");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/", hotelController);

module.exports = app;
