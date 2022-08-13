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
  getAll(req, res) {
    res.send("get cars");
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
