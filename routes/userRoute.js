const express = require("express");
const { logIn, singUp } = require("../service/authService");
const { auth } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/singUp", singUp);
router.post("/logIn", logIn);
router.get("/", auth, (req, res) => {
  res.json({ message: `welcome ${req.user.name}` });
});

module.exports = router;
