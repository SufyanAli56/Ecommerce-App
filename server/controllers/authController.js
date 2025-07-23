const User = require("../models/User");
const Otp = require("../models/Otp");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Send OTP
exports.sendOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await Otp.deleteMany({ email }); // remove existing OTPs
  await Otp.create({ email, otp });

  try {
    await sendEmail(email, "Your OTP Code", `Your OTP is ${otp}`);
    res.json({ message: "OTP sent to email" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send OTP email" });
  }
};

// Verify OTP
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ error: "Email and OTP are required" });

  const validOtp = await Otp.findOne({ email, otp });
  if (!validOtp) return res.status(400).json({ error: "Invalid or expired OTP" });

  let user = await User.findOne({ email });
  if (!user) user = await User.create({ email }); // user without password

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

  await Otp.deleteMany({ email }); // remove used OTP
  res.json({ token, user });
};

// Register with password
exports.register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password are required" });

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ error: "User already exists" });

  const user = await User.create({ email, password });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, user });
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Email and password are required" });

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "User not found" });

  if (!user.password) {
    return res.status(400).json({ error: "User has no password set (OTP-based user?)" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({ token, user });
};

// Optional: Set password for OTP-based users
exports.setPassword = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email and password are required" });

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: "User not found" });

  if (user.password)
    return res.status(400).json({ error: "Password already set" });

  user.password = password;
  await user.save();

  res.json({ message: "Password set successfully" });
};

// Add to authController.js
exports.setPassword = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });
  
    user.password = password;
    await user.save();
  
    res.json({ message: "Password set successfully" });
  };
  