const express = require("express");
const router = express.Router();
const Hotel = require("../models/hotel.model");

router.get("/getHotels", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    return res.status(202).send(hotels);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/addHotel", async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    return res.status(201).send(hotel);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/addMany", async (req, res) => {
  try {
    const hotels = await Hotel.insertMany(req.body);
    return res.status(201).send(hotels);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
