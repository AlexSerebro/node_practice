const { repositoryCars } = require("../repository");

class Cars {
  async add(req, res) {
    try {
      const car = await repositoryCars.save(req.body);
      res.status(201).json({
        message: "Success",
        code: 201,
        data: {
          car,
        },
      });
    } catch (error) {
      console.log(error.message.red);
    }
  }
  async getAll(req, res) {
    try {
      const cars = await repositoryCars.getAll();
      res.status(200).json({
        message: "Success",
        code: 200,
        data: {
          cars,
          quantity: cars.length,
        },
      });
    } catch (error) {
      console.log(error.message.red);
    }
  }
  getOne(req, res) {
    res.send("one car");
  }
  update(req, res) {
    res.send("upd car");
  }
  remove(req, res) {
    res.send("rem car");
  }
}

module.exports = new Cars();
