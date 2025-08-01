import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import useCartStore from "../../store/cartStore";

// Reusable Trending Products Component with heading as prop
const Trandy = ({ heading = "Trending Products" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const skipFirst = 6;
  const addToCart = useCartStore((state) => state.addToCart);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const fetchTrandyProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/products`);
        const trandyItems = res.data.slice(skipFirst);
        if (isMounted) setProducts(trandyItems);
      } catch (err) {
        setError("Failed to load trending products. Please try again.");
        console.error("Error fetching trandy products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrandyProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleAddToCart = (product) => {
    if (product.stock <= 0) {
      toast.error("❌ Product is out of stock!");
      return;
    }
    addToCart({ ...product, quantity: 1 });
    toast.success(`✅ ${product.name} added to cart!`);
  };

  const handleViewDetails = (product) => {
    toast.info(`🔍 Viewing details for ${product.name}`);
    setTimeout(() => {
      navigate(`/product/${product._id}`);
    }, 500);
  };

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-white">
      {/* Heading with red lines */}
      <div className="flex items-center justify-center mb-6">
        <div className="h-[2px] w-16 bg-red-500 mr-4"></div>
        <h2 className="text-2xl font-bold text-gray-800 text-center">{heading}</h2>
        <div className="h-[2px] w-16 bg-red-500 ml-4"></div>
      </div>

      {products.length === 0 ? (
        <p className="text-gray-600 text-center">No trendy products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-md flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={`http://localhost:5000/${product.image}`}
                  alt={product.name}
                  className="w-full h-60 object-cover object-top transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mt-3">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-1 line-clamp-2">{product.description}</p>
              <p className="text-md font-bold text-gray-900">${product.price}</p>
              <p className="text-xs text-gray-500 mb-3">
                Stock: {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
              </p>

              <div className="mt-auto flex justify-between items-center gap-2">
                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock <= 0}
                  className={`flex items-center gap-2 px-3 py-1 rounded transition ${
                    product.stock <= 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-amber-700 text-white hover:bg-amber-800"
                  }`}
                >
                  <FaShoppingCart className="text-white" />
                  Add to Cart
                </button>

                {/* View Details Button */}
                <button
                  onClick={() => handleViewDetails(product)}
                  className="flex items-center gap-2 bg-amber-700 text-white px-3 py-1 rounded hover:bg-amber-800 transition"
                >
                  <FaEye className="text-white" />
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trandy;
