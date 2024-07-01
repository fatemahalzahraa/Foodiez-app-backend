const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to DB :) ");
  } catch (error) {
    console.log("ERROR trying to connect to DB :( ", error);
  }
};

module.exports = connectDB;
