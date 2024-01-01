const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Auth")
    .then((conn) => {
      console.log(`database connected : ${conn.connection.host}`);
    })
    .catch((err) => {
      console.error(`Database error : ${err}`);
      process.exit(1);
    });
};

module.exports = dbConnection;
