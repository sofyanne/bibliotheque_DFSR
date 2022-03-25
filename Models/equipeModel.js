const mongoose = require("mongoose");

const equipeSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  manager: String,
  drivers: [{ firstname: String, lastname: String }],
  car: String,
});

module.exports = mongoose.model("team", equipeSchema);
