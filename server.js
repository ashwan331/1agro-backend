require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/fertilizers", require("./routes/fertilizers"));
app.use("/api/rentals", require("./routes/rentals"));

// Server
const PORT = 3000;
connectDB();
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
