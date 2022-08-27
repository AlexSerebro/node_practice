const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Users = require("../models/Users");

module.exports = expressAsyncHandler(async (req, res, next) => {
  //перевірити який метод прийшов
  //зчитати токен з заголовку
  //перевірити що це токен авторизації
  //якщо токен не передали, або це не токен авторизаціі - вивсети повідомлення
  //розпаршуемо токен
  //передаємо инфо з токену
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

    const candidate = await Users.findById(decoded.id).select("-userPassword");
    if (!candidate) {
      res.status(401);
      throw new Error("Not authorized");
    }

    req.user = candidate;
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized");
  }

  next();
});
