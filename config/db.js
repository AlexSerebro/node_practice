const { connect } = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const db = await connect(process.env.MONGODB_URI);
    console.log(
      `MongoDB is connecteion on HOST ${db.connection.host} DB_name ${db.connection.name}`
        .cyan.italic.underline
    );
  } catch (error) {
    console.log(error.message.red);
  }
};

module.exports = connectDB;
