const { model, Schema } = require("mongoose");

const userSchema = Schema(
  {
    userName: String,
    userEmail: {
      type: String,
      unique: true,
    },
    userPassword: String,
    // userRoles: [],
    token: {
      type: String,
      default: null,
    },
    hobbies: [],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("user", userSchema);
