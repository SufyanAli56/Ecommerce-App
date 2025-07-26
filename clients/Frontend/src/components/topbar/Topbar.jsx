import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaBars
} from 'react-icons/fa';

const Topbar = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="bg-[#f1f3fc] px-4 sm:px-6 py-2 text-sm text-gray-700 font-poppins">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        
        {/* Left Links */}
        <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-2 sm:space-x-4">
          <a href="#" className="hover:text-blue-600">FAQs</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-blue-600">Help</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-blue-600">Support</a>
        </div>

        {/* Right Icons - Toggle on small screens */}
        <div className="sm:flex items-center space-x-3 hidden">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="hover:text-blue-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaYoutube className="hover:text-red-600 cursor-pointer" />
        </div>

        {/* Toggle Button (visible on small screens) */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setShowIcons(!showIcons)}
            className="text-gray-700 focus:outline-none"
          >
            <FaBars className="text-lg" />
          </button>
        </div>
      </div>

      {/* Mobile Icons Dropdown */}
      {showIcons && (
        <div className="flex justify-center mt-2 space-x-4 sm:hidden">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="hover:text-blue-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaYoutube className="hover:text-red-600 cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default Topbar;
