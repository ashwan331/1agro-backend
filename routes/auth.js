const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Test route
router.get("/test", (req, res) => {
  res.json({ message: "Auth route working" });
});

// Signup
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = new User({ username, password });
  await user.save();

  res.json({ message: "Signup successful" });
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    message: "Login successful",
    username: user.username,
    role: user.role
  });
});

module.exports = router;
