import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg border-r border-gray-200 p-6">
      <div className="flex items-center mb-10">
        <div className="bg-blue-500 w-8 h-8 rounded-lg mr-2"></div>
        <span className="text-xl font-bold text-gray-800">EcomDash</span>
      </div>
      <nav className="space-y-4 text-gray-700">
        <a href="#" className="block font-medium hover:text-blue-600">Dashboard</a>
        <a href="#" className="block font-medium hover:text-blue-600">Orders</a>
        <a href="#" className="block font-medium hover:text-blue-600">Products</a>
        <a href="#" className="block font-medium hover:text-blue-600">Customers</a>
        <a href="#" className="block font-medium hover:text-blue-600">Reports</a>
      </nav>
    </aside>
  );
}

export default Sidebar;
