const modelCars = require("../../models/Cars");
class Cars {
  async save(data) {
    try {
      const car = await modelCars.create({ ...data });
      return car;
    } catch (error) {
      console.log(error.message.red);
    }
  }
}
module.exports = new Cars();
