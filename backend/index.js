const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("../backend/routes/user.route");
const todoRoutes = require("../backend/routes/todo.route");

// configuring dotenv
dotenv.config({});

//middleware
const app = express();
app.use(express.json());

//routes
app.use("/api/user", userRoutes);
app.use("/api/todo", todoRoutes);

//connnect to database
connectDB();

app.listen(3000, () => {
  console.log("server running");
});
