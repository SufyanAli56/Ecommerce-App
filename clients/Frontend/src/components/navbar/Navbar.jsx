import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const MainNavbar = () => {
  return (
    <nav className="bg-white px-6 py-4 flex justify-between items-center shadow-sm font-poppins">
      <div className="text-3xl font-bold text-gray-800 flex items-center">
        <span className="bg-white border border-gray-300 text-pink-600 text-3xl font-bold px-3 py-1  mr-2 shadow-sm">
          E
        </span>
        Shopper
      </div>
      <input
        type="text"
        placeholder="Search for products"
        className="border px-4 py-2 rounded-lg w-1/2 outline-none focus:ring"
      />
      <div className="flex items-center space-x-6">
        <FaHeart className="text-xl cursor-pointer hover:text-pink-500" />
        <FaShoppingCart className="text-xl cursor-pointer hover:text-blue-600" />
      </div>
    </nav>
  );
};

export default MainNavbar;
