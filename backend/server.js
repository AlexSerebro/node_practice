const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const cors = require("cors");
const { engine } = require("express-handlebars");
const sendEmail = require("./services/sendEmail");

require("colors");
require("../config/setEnvVar");

const conectDB = require("../config/db");

const { PORT } = process.env;

const app = express();

(async () => {
  await conectDB();
})();

app.use(cors());
//set view engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./backend/views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", require("./routes/carRouters"));
app.use("/users", require("./routes/userRouterts"));

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/send", async (req, res) => {
  // console.log(req.body);
  await sendEmail(req.body);
  res.render("contact", { msg: "form is send" });
});

// app.get("/pizza", (req, res) => {
//   res.redirect("contact");

// });

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});
app.use(require("./midlewares/errorHandler"));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.cyan.italic.underline);
});
