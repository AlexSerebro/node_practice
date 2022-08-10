const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    const db = await connect(process.env.MONGODB_URI);
    console.log(db);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
