const { Router } = require("express");
const Users = require("../controlers/Users");
const router = Router();
const authMiddleware = require("../midlewares/authMiddleware");

//register
//login
//logout
//getAllUser
//remove
//localhost:5000/api/v1/cars

router.post(
  "/register",
  (req, res, next) => {
    console.log("відпрацював joi");
    next();
  },
  Users.register
);

router.post("/login", Users.login);

router.get("/logout", authMiddleware, Users.logout);

router.get("/getallusers", authMiddleware, Users.getAllUser);

module.exports = router;
