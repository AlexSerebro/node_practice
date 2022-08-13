const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const cors = require("cors");

require("colors");
require("../config/setEnvVar");

const conectDB = require("../config/db");

const { PORT } = process.env;

const app = express();

(async () => {
  await conectDB();
})();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", require("./routes/carRouters"));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.cyan.italic.underline);
});
