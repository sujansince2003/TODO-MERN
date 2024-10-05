const mongoose = require("mongoose");
const dotenv = require("dotenv");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database");
  }
}

module.exports = connectDB;
