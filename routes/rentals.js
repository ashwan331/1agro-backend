const express = require("express");
const router = express.Router();
const Rental = require("../models/Rental");

router.get("/", async (req, res) => {
  const rentals = await Rental.find();
  res.json(rentals);
});

module.exports = router;
