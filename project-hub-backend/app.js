const express = require("express"); // Import express module
const dbConnect = require("./database/database.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Connect to the database
dbConnect();

// Port number selection
const PORT = process.env.PORT || 5000;
const app = express(); // Creating express app

// CORS options
const corsOptions = {
  origin: [
    "https://projecthub-78g5.onrender.com",
    "http://localhost:3000",
    "http://localhost:5173",
  ],
  methods: ["GET", "POST", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware for additional request info
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(`${new Date().toISOString()} - ${req.method} -- ${req.path}`);
  next();
});

// Define routes
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on Port ${PORT}`);
});

module.exports = app;
