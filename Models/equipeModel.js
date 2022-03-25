const mongoose = require("mongoose");

const equipeSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
});

module.exports = mongoose.model("team", equipeSchema);
