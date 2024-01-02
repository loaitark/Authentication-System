const express = require("express");
const connectDB = require("./db/db_connection");
const userRoute = require("./routes/userRoute");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.use("/auth", userRoute);

const server = app.listen(process.env.PORT, () => {
  console.log(`server connect to port ${process.env.PORT}`);
  console.log(process.env.PORT);
});

process.on("uncaughtException", (err) => {
  console.log(`an error occurred : ${err.message}`);
  server.close(() => process.exit(1));
});
