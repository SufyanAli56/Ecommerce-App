import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const categories = [
  'Dresses', 'Shirts', 'Jeans', 'Swimwear', 'Sleepwear',
  'Sportswear', 'Jumpsuits', 'Blazers', 'Jackets', 'Shoes'
];

const Sidebar = () => {
  return (
    <div className="w-64 ml-24 bg-white shadow border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-rose-700 px-4 py-3 font-bold text-white text-lg tracking-wide">
        Categories
      </div>
      <ul className="divide-y divide-gray-200">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="group px-4 py-3 flex justify-between items-center text-gray-700 hover:bg-gray-100 cursor-pointer transition duration-200"
          >
            <span>{cat}</span>
            <FaChevronRight className="text-gray-400 group-hover:text-rose-600 transition duration-200 text-xs" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
