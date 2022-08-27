const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Users = require("../models/Users");

module.exports = function (roles) {
  return expressAsyncHandler(async function (req, res, next) {
    if (req.method === "OPTION") {
      next();
    }

    const auth = req.headers.authorization;
    if (!(auth && auth.startsWith("Bearer"))) {
      res.status(400);
      throw new Error("Authorization token is not send");
    }
    const token = auth.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      console.log(decoded);
      //decoded.userRoles це масів з ролями
      //треба знайти в масиві роль
      //якщо ролі нема вертаємо статус 403
      //якщо є кидаемо next

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized");
    }

    next();
  });
};
