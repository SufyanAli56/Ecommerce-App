import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";

const Trandy = () => {
  const [products, setProducts] = useState([]);
  const addToCart = useCartStore((state) => state.addToCart); // ✅ selector
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true; // ✅ avoid state update after unmount
    const fetchTrandyProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        const trandyItems = res.data.slice(6);
        if (isMounted) setProducts(trandyItems);
      } catch (err) {
        console.error("Error fetching trandy products:", err);
      }
    };
    fetchTrandyProducts();
    return () => {
      isMounted = false;
    };
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
              className="border border-gray-200 rounded p-4 shadow flex flex-col"
            >
              <img
                src={`http://localhost:5000/${product.image}`}
                alt={product.name}
                className="w-full h-60 object-cover object-top rounded mb-3 transition-transform duration-300 transform hover:scale-105"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{product.description}</p>
              <p className="text-md font-bold">${product.price}</p>
              <p className="text-xs text-gray-500 mb-3">
                Category: {product.category}
              </p>

              <button
                onClick={() => addToCart(product)} // ✅ only on click
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition mb-2"
              >
                Add to Cart
              </button>

              <button
                onClick={() => navigate(`/product/${product._id}`)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trandy;
