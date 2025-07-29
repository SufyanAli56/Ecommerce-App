// src/components/cartNavbar/CartNavbar.jsx
import React from "react";
import useCartStore from "../../store/cartStore";

const CartNavbar = () => {
  const cartCount = useCartStore((state) => state.cart.length);
  return (
    <div className="p-4 bg-gray-900 text-white flex justify-between">
      <h1>Shop</h1>
      <div>🛒 Cart: {cartCount}</div>
    </div>
  );
};

export default CartNavbar; // ✅ default export
