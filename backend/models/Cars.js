const { model, Schema } = require("mongoose");

const carSchema = Schema(
  {
    manufacturer: String,
    title: String,
    year: Number,
    color: String,
    price: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("car", carSchema);
