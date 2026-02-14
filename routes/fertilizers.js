const express = require("express");
const router = express.Router();
const Fertilizer = require("../models/Fertilizer");

router.get("/", async (req, res) => {
  const fertilizers = await Fertilizer.find();
  res.json(fertilizers);
});

module.exports = router;
