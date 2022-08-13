const { Router } = require("express");
const Cars = require("../controlers/Cars");
const router = Router();

//getall
//getOne
//add
//update
//remove
//localhost:5000/api/v1/cars

router.post("/cars", Cars.add);

router.get("/cars", Cars.getAll);

module.exports = router;
