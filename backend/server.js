const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
require("colors");

const conectDB = require("../config/db");

dotenv.config({
  path: path.join(__dirname, "..", "config", ".env"),
});

const { PORT } = process.env;

const app = express();

(async () => {
  await conectDB();
})();

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.cyan.italic.underline);
});
