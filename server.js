const express = require("express");
const connectDB = require("./db/db_connection");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`server connect to port ${process.env.PORT}`);
  console.log(process.env.PORT);
});

process.on("uncaughtException", (err) => {
  console.log(`an error occurred : ${err.message}`);
  server.close(() => process.exit(1));
});
