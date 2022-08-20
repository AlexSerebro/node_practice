const { Router } = require("express");
const Users = require("../controlers/Users");
const router = Router();

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

router.get("/logout", Users.logout);

router.get("/getallusers", Users.getAllUser);

module.exports = router;
