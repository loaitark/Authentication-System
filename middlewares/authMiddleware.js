const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "unvalid token" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decodedToken);
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid auth" });
  }
};

module.exports = { auth };
