const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path"); // For serving image files

dotenv.config();
const connectDB = require("./config/db");

// Route Imports
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

// Connect to DB
connectDB();

// Initialize Express App
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // ✅ Fixed path

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
