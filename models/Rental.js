const mongoose = require("mongoose");

const RentalSchema = new mongoose.Schema({
  name: String,
  description: String,
  count: Number
});

module.exports = mongoose.model("Rental", RentalSchema);
