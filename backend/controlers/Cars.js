class Cars {
  add(req, res) {
    res.send("add car");
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
