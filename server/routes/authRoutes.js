const express = require("express");
const router = express.Router();
const {
  sendOtp,
  verifyOtp,
  register,
  login,
  setPassword, // NEW
} = require("../controllers/authController");

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/register", register);
router.post("/login", login);
router.post("/set-password", setPassword); // NEW
router.post("/set-password", setPassword);

module.exports = router;
