const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: String,
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "Farmer"
  }
});

module.exports = mongoose.model("User", UserSchema);
