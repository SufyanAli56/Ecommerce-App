const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// GET all products
router.get("/", getAllProducts);

// GET single product by ID
router.get("/:id", getProductById);

// POST new product with image upload
// Use 'image' as the key in form-data
router.post("/", upload.single("image"), createProduct);

// PUT update a product
router.put("/:id", updateProduct);

// DELETE a product
router.delete("/:id", deleteProduct);

module.exports = router;
