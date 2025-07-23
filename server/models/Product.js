const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, required: true }, // e.g., "T-Shirt", "Accessories"
  stock: { type: Number, default: 0 },
  sizes: [String],        // e.g., ["S", "M", "L"]
  colors: [String],       // e.g., ["Red", "Black"]
  image: String,          // URL or local path
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
