const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = Mongoose.model("user", UserSchema);
module.exports = User;
