const { Router } = require("express");
const Cars = require("../controlers/Cars");
const router = Router();
const authMiddleware = require("../midlewares/authMiddleware");

//getall
//getOne
//add
//update
//remove
//localhost:5000/api/v1/cars

router.post("/cars", authMiddleware, Cars.add);

router.get("/cars", authMiddleware, Cars.getAll);

module.exports = router;
