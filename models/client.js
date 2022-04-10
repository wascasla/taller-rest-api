const mongoose = require("mongoose");

const clientModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: "{PATH} is required!",
    },
    phone: {
      type: Number,
    },
    cars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Car" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Client', clientModel);
