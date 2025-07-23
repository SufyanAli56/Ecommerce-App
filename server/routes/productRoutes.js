const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);        // Protect later with admin middleware
router.put("/:id", updateProduct);      // Protect later
router.delete("/:id", deleteProduct);   // Protect later

module.exports = router;
