import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useCartStore from "../../store/cartStore";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const CartNavbar = () => {
  const cartItems = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRemoveItem = (productId, productName) => {
    removeFromCart(productId);
    toast.success(`${productName} removed from cart!`);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center relative">
      {/* Logo */}
      <Link to="/" className="text-lg font-bold text-gray-800">
        MyShop
      </Link>

      {/* Cart Icon */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="relative flex items-center focus:outline-none"
          aria-label="Toggle cart dropdown"
        >
          <FaShoppingCart className="text-2xl text-amber-700" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
        </button>

        {/* Dropdown Cart Items */}
        {open && (
          <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="p-3 max-h-64 overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-sm">Cart is empty</p>
              ) : (
                cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border-b border-gray-100 py-2"
                  >
                    <img
                      src={`http://localhost:5000/${item.image}`}
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        ${item.price} × {item.quantity || 1}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item._id, item.name)}
                      className="text-red-500 hover:text-red-700"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-3 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Total: ${totalPrice.toFixed(2)}
                </p>
                <Link
                  to="/cart"
                  className="block w-full text-center bg-amber-700 text-white py-2 rounded hover:bg-amber-800 transition"
                  onClick={() => setOpen(false)}
                >
                  Go to Cart
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default CartNavbar;