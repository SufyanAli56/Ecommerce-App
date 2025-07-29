import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import useCartStore from "../../store/cartStore";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError("Failed to load product. Please try again.");
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product.stock <= 0) {
      toast.error("Product is out of stock!");
      return;
    }
    addToCart({ ...product, quantity });
    toast.success(`${product.name} added to cart!`);
  };

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;
  if (!product) return <p className="p-6 text-center">Product not found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <img
          src={`http://localhost:5000/${product.image}`}
          alt={product.name}
          className="w-full md:w-1/2 h-96 object-cover rounded"
        />

        {/* Product Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Price: ${product.price}
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Category: {product.category}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Stock: {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2 text-gray-600">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 p-1 border rounded"
              disabled={product.stock <= 0}
            />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
            className={`px-5 py-2 rounded transition ${
              product.stock <= 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-amber-700 text-white hover:bg-amber-800"
            }`}
          >
            Add to Cart
          </button>

          {/* Back to Products */}
          <button
            onClick={() => navigate("/")}
            className="ml-4 px-5 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Back to Products
          </button>
        </div>
      </div>

      {/* Related Products Placeholder */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Related Products</h3>
        <p className="text-gray-600">Feature coming soon!</p>
        {/* Implement related products fetching logic here */}
      </div>
    </div>
  );
};

export default ProductDetails;