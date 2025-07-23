exports.addToCart = async (req, res) => {
    try {
      const userId = req.user.userId; // Token must be verified
      const { productId, quantity } = req.body;
  
      console.log("Incoming Request:", req.body);
  
      if (!productId || !quantity) {
        return res.status(400).json({ error: "productId and quantity are required" });
      }
  
      const qty = Number(quantity);
      if (isNaN(qty) || qty <= 0) {
        return res.status(400).json({ error: "Quantity must be a positive number" });
      }
  
      let cart = await Cart.findOne({ userId });
  
      if (!cart) {
        cart = await Cart.create({
          userId,
          products: [{ productId, quantity: qty }],
        });
      } else {
        const productIndex = cart.products.findIndex(p => p.productId == productId);
        if (productIndex > -1) {
          cart.products[productIndex].quantity += qty;
        } else {
          cart.products.push({ productId, quantity: qty });
        }
        await cart.save();
      }
  
      res.json(cart);
    } catch (err) {
      console.error("Error adding to cart:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  