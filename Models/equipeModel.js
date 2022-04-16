const mongoose = require("mongoose");

const equipeSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  drivers: [
    {
      firstname: {
        type: String,
        require: true,
      },
      lastname: {
        type: String,
        require: true,
      },
    },
  ],
  car: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("team", equipeSchema);
