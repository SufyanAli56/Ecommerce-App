import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const MainNavbar = () => {
  return (
    <nav className="bg-white px-6 py-4 flex justify-between items-center shadow-sm font-poppins">
      {/* Logo */}
      <div className="text-3xl font-bold text-gray-800 flex items-center">
        <span className="bg-white border border-gray-300 text-pink-600 text-3xl font-bold px-3 py-1 mr-2 shadow-sm rounded">
          E
        </span>
        Shopper
      </div>

      {/* Search Bar with icon inside */}
      
      <div className="relative w-1/2">
  <input
    type="text"
    placeholder="Search for products"
    className="w-full border px-4 py-2 pr-12 rounded-lg outline-none focus:ring text-sm"
  />
  <div className="absolute top-1/2 right-3 -translate-y-1/2 bg-white border border-gray-300 p-1 rounded shadow-sm">
    <FiSearch className="text-gray-500" />
  </div>
</div>

      {/* Icons with boxes and hover */}
      <div className="flex items-center space-x-4">
        <div className="p-2 border border-gray-300 rounded hover:text-gray-600 cursor-pointer transition-colors duration-200">
          <FaHeart className="text-xl" />
        </div>
        <div className="p-2 border border-gray-300 rounded hover:text-gray-600 cursor-pointer transition-colors duration-200">
          <FaShoppingCart className="text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
