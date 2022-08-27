const { Router } = require("express");
const Cars = require("../controlers/Cars");
const router = Router();
const authMiddleware = require("../midlewares/authMiddleware");
const roleMiddleware = require("../midlewares/roleMiddleware");

//getall
//getOne
//add
//update
//remove
//localhost:5000/api/v1/cars

router.post("/cars", authMiddleware, Cars.add);

// router.get("/cars", authMiddleware, Cars.getAll);

//ADMIN
//MODERATOR
//USER
//CUSTOMER
//EDITOR
//[MODERATOR, EDITOR]
//[ADMIN, MODERATOR, CUSTOMER]
//[USER]

router.get(
  "/cars",
  authMiddleware,

  // roleMiddleware(["MODERATOR", "EDITOR"]),

  Cars.getAll
);
// router.get("/cars", Cars.getAll);

module.exports = router;
