const mongoose = require("mongoose");

const FertilizerSchema = new mongoose.Schema({
  name: String,
  description: String,
  recommended: Boolean
});

module.exports = mongoose.model("Fertilizer", FertilizerSchema);
