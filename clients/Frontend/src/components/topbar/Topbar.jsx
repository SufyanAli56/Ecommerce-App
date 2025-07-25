import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="bg-[#f1f3fc] px-6 py-2 flex justify-between items-center text-sm text-gray-700 font-poppins">
      <div className="flex space-x-4">
        <a href="#">FAQs</a>
        <span>|</span>
        <a href="#">Help</a>
        <span>|</span>
        <a href="#">Support</a>
      </div>
      <div className="flex space-x-3">
        <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
        <FaTwitter className="hover:text-blue-500 cursor-pointer" />
        <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        <FaYoutube className="hover:text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Topbar;
