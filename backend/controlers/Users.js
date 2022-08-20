const asyncHandler = require("express-async-handler");

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
    console.log(req.body);
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
