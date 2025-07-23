// routes/cartRoutes.js
const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/add", authMiddleware.verifyToken, cartController.addToCart);

module.exports = router;
