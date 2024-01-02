const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const singUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await User.create({ name, email, hashedPassword });
    user.save();
    res.json({ message: "signUp successful" });
  } catch (err) {
    next(err);
  }
};

const logIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "SingUp first" });
    }
    const passwordMatch = await User.comparePassword(password);
    if (!passwordMatch) {
      return res.status(404).json({ message: "wrong password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1 hour",
    });

    res.json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = { singUp, logIn };
