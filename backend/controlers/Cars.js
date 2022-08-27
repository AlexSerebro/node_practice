const { repositoryCars } = require("../repository");
const asyncHandler = require("express-async-handler");

class Cars {
  add = asyncHandler(async (req, res) => {
    if (!req.body.manufacturer) {
      res.status(400);
      throw new Error("Miss manufacturer field");
    }
    const car = await repositoryCars.save(req.body, req.user._id);
    res.status(201).json({
      message: "Success",
      code: 201,
      data: {
        car,
      },
    });
  });

  getAll = asyncHandler(async (req, res) => {
    try {
      console.log("get all");
      // console.log(req.user._id);
      // const cars = await repositoryCars.getAll(req.user._id);

      // res.status(200).json({
      //   message: "Success",
      //   code: 200,
      //   data: {
      //     cars,
      //     quantity: cars.length,
      //   },
      // });
    } catch (error) {
      console.log(error.message.red);
    }
  });
  getOne = asyncHandler(async (req, res) => {
    res.send("one car");
  });
  update = asyncHandler(async (req, res) => {
    res.send("upd car");
  });
  remove = asyncHandler(async (req, res) => {
    res.send("rem car");
  });
}

module.exports = new Cars();
