const { model, Schema } = require("mongoose");

const userSchema = Schema(
  {
    userName: String,
    userEmail: {
      type: String,
      unique: true,
    },
    userPassword: String,

    token: {
      type: String,
      default: null,
    },
    userRoles: [
      {
        type: String,
        ref: "Role",
      },
    ],
    hobbies: [],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("user", userSchema);
