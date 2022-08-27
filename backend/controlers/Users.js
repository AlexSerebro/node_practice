const asyncHandler = require("express-async-handler");
const Users = require("../models/Users");
const Roles = require("../models/Roles");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserControler {
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
    const userRole = await Roles.findOne({ value: "ADMIN" });

    // console.log(userRole);

    const candidate = await Users.create({
      userName,
      userEmail,
      userPassword: hashPassword,
      userRoles: [userRole.value],
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

  login = asyncHandler(async (req, res) => {
    //отримаємо данні від користувача
    //валідуємо данні
    //перевіряємо чи є користувач в базі данних
    //якщо такого email нема , кажемо зареєструватися
    //порівнюємо логін пароль с базою данних
    //якщо щось не так , видаємо повідомлення що логін або пароль невірні
    //якщо ок, генеруємо токен
    const { userEmail, userPassword } = req.body;
    if (!(userEmail && userPassword)) {
      res.status(400);
      throw new Error("Input all fields");
    }
    const candidate = await Users.findOne({ userEmail });
    // console.log(candidate);
    if (!candidate) {
      return res.status(403).json({
        message: "Plz register",
      });
    }
    if (
      !(
        candidate &&
        (await bcrypt.compare(userPassword, candidate.userPassword))
      )
    ) {
      res.status(400);
      throw new Error("Invalid login or password");
    }
    const payload = {
      id: candidate._id,
      roles: candidate.userRoles,
    };

    candidate.token = this.generateToken(payload);
    candidate.hobbies = ["read", "drive"];

    await candidate.save();

    if (!candidate) {
      res.status(400);
      throw new Error("login error");
    }

    res.status(200).json({
      status: "succses",
      code: 200,
      data: {
        userName: candidate.userName,
        userEmail: candidate.userEmail,
        token: candidate.token,
      },
    });
  });

  logout = asyncHandler(async (req, res) => {
    //зчитуемо req.user._id
    //шукаемо користувача по id
    //записуемо корустувачу в базу токен нал
    const { _id } = req.user;
    const candidate = await Users.findById(_id);
    if (!candidate) {
      res.status(400);
      throw new Error("logout error");
    }
    candidate.token = null;
    await candidate.save();
    res.status(200).json({
      status: `Logout success with id${_id}`,
      code: 200,
    });
  });

  getAllUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const candidate = await Users.findById(_id);
    if (!candidate.token) {
      res.status(400);
      throw new Error("Not authorize");
    }
    const users = await Users.find({});
    res.status(200).json(users);
  });

  generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "8h",
    });
  };
}
module.exports = new UserControler();
