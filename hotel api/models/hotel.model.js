const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema({
  id: { type: Number },
  hotel_name: { type: String },
  city: { type: String },
  hotel_img: { type: String },
  img2: { type: String },
  img3: { type: String },
  img4: { type: String },
  img5: { type: String },
  ratings: { type: Number },
  price: { type: String },
  price_op: { type: String },
  des: { type: String },
});

module.exports = mongoose.model("hotel", hotelSchema);
