import React, { useEffect, useState } from "react";
import axios from "axios";

const Trandy = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchTrandyProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        // Take products starting from index 6
        const trandyItems = res.data.slice(6);
        setProducts(trandyItems);
      } catch (err) {
        console.error("Error fetching trandy products:", err);
      }
    };

    fetchTrandyProducts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Trandy Products</h2>
      {products.length === 0 ? (
        <p>No trendy products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border border-gray-200 rounded p-4 shadow"
            >
              <img
                src={`http://localhost:5000/${product.image}`}
                alt={product.name}
                className="w-full h-60 object-cover object-top rounded mb-3 transition-transform duration-300 transform hover:scale-105"
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

export default Trandy;
