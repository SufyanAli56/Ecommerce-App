import React, { useEffect, useState } from "react";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="border border-gray-200 rounded p-4 shadow">
             <img
  src={`http://localhost:5000/${product.image}`}
  alt={product.name}
  className="w-full h-78 object-cover object-top rounded mb-3 transition-transform duration-300 transform hover:scale-105"
/>

              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{product.description}</p>
              <p className="text-md font-bold">${product.price}</p>
              <p className="text-xs text-gray-500">Category: {product.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
