import React from 'react';

const categories = [
  'Dresses', 'Shirts', 'Jeans', 'Swimwear', 'Sleepwear',
  'Sportswear', 'Jumpsuits', 'Blazers', 'Jackets', 'Shoes'
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow border border-gray-200">
      <div className="bg-rose-300 px-4 py-3 font-bold text-white">Categories</div>
      <ul className="divide-y">
        {categories.map(cat => (
          <li key={cat} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
