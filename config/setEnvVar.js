const dotEnv = require("dotenv");
const path = require("path");

module.exports = dotEnv.config({
  path: path.join(__dirname, "..", "config", ".env"),
});
