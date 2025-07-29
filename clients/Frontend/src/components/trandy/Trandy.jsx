import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useCartStore from "../../store/cartStore";

const Trandy = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const addToCart = useCartStore((state) => state.addToCart);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const fetchTrandyProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:5000/api/products?page=${page}&limit=${itemsPerPage}`
        );
        if (isMounted) setProducts(res.data);
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
  }, [page]);

  const handleAddToCart = (product) => {
    if (product.stock <= 0) {
      toast.error("Product is out of stock!");
      return;
    }
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart!`);
  };

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Trending Products</h2>
      {products.length === 0 ? (
        <p className="text-gray-600">No trendy products found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col"
              >
                <img
                  src={`http://localhost:5000/${product.image}`}
                  alt={product.name}
                  className="w-full h-60 object-cover object-top rounded mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-1 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-md font-bold text-gray-900">${product.price}</p>
                <p className="text-xs text-gray-500 mb-3">
                  Stock: {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                </p>

                {/* Buttons Row */}
                <div className="mt-auto flex justify-between items-center gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock <= 0}
                    className={`px-3 py-1 rounded transition ${
                      product.stock <= 0
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-amber-700 text-white hover:bg-amber-800"
                    }`}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => navigate(`/product/${product._id}`)}
                    className="bg-amber-700 text-white px-3 py-1 rounded hover:bg-amber-800 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 disabled:bg-gray-400"
            >
              Previous
            </button>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={products.length < itemsPerPage}
              className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Trandy;