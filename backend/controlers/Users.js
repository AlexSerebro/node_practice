const asyncHandler = require("express-async-handler");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");

class User {
  register = asyncHandler(async (req, res) => {
    //отримаємо данні від користувача
    //валідуємо данні
    //перевіряємо чи є користувач в базі данних
    //якщо є, повідомити що такий вже є
    //хешуємо пароль
    //зберігаємо юзера в базі данних з хешованим паролем

    const { userName, userEmail, userPassword } = req.body;
    if (!(userName && userEmail && userPassword)) {
      res.status(400);
      throw new Error("Input all fields");
    }
    const oldUser = await Users.findOne({ userEmail });
    if (oldUser) {
      res.status(409);
      throw new Error("User already exist, login plz");
      //redirect login
    }
    const hashPassword = await bcrypt.hash(userPassword, 10);

    const candidate = await Users.create({
      userName,
      userEmail,
      userPassword: hashPassword,
    });
    if (!candidate) {
      res.status(400);
      throw new Error("regist error");
    }

    res.status(201).json({
      status: "success",
      code: 201,
      data: candidate,
    });
  });

  login = asyncHandler(async () => {
    console.log("login");
  });
  logout = asyncHandler(async () => {
    console.log("logout");
  });
  getAllUser = asyncHandler(async () => {
    console.log("get all user");
  });
}
module.exports = new User();
