const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/fertilizers", require("./routes/fertilizers"));
app.use("/api/rentals", require("./routes/rentals"));

// Test route
app.get("/", (req, res) => {
  res.send("AgroSmart Backend Running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
