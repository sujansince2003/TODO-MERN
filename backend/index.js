const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("../backend/routes/user.route");
const todoRoutes = require("../backend/routes/todo.route");
const cors = require("cors");

// configuring dotenv
dotenv.config({});

//middleware
const app = express();
app.use(express.json());

//setting up cors

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.options("*", cors());
//routes
app.use("/api/user", userRoutes);
app.use("/api/todo", todoRoutes);

//connnect to database
connectDB();

app.listen(3001, () => {
  console.log("server running");
});
