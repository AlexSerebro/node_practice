const { Router } = require("express");

const router = Router();

//getall
//getOne
//add
//update
//remove
//localhost:5000/api/v1/cars

router.post("/cars", (req, res) => {
  res.send("add car");
});

router.get("/cars", (req, res) => {
  res.send("get all cars");
});

module.exports = router;
