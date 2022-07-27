const mongoose = require("mongoose");
require("dotenv").config();
const key = process.env.DB_KEY;


module.exports = () => {
  return mongoose.connect(
    `mongodb+srv://Shailendra:${key}@cluster0.d59up.mongodb.net/vrbo`
  );
};
