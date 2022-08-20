const { model, Schema } = require("mongoose");

const carSchema = Schema(
  {
    manufacturer: String,
    title: String,
    year: Number,
    color: String,
    price: Number,
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("car", carSchema);
