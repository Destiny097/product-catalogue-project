import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "../index.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const {addToCart} = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2 className="p-6 text-center text-gray-600">Loading product...</h2>;
  }

  if (error) {
    return <h2 className="p-6 text-center text-red-600">Error: {error}</h2>;
  }

  if (!product) {
    return <h2 className="p-6 text-center text-gray-600">Product not found.</h2>;
  }

  return (
    <div className="grid max-w-6xl gap-10 p-6 mx-auto md:grid-cols-2">
      {/* Left: Product Image */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full shadow-md rounded-xl"
        />
      </div>

      {/* Right: Product Details */}
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="mt-4 text-xl font-semibold">${product.price}</p>

        {/* Colors */}
        {product.colors?.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold">Colors</h3>
            <div className="flex gap-3 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border ${
                    selectedColor === color ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Sizes */}
        {product.sizes?.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold">Size</h3>
            <select
              className="w-full p-2 mt-2 border rounded-lg"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">Select Size</option>
              {product.sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button onClick={() => addToCart(product)} className="flex-1 py-3 text-white bg-green-700 rounded-lg hover:bg-green-800">
            Add to Cart
          </button>
          <button className="flex items-center gap-2 px-4 py-3 border rounded-lg hover:bg-gray-100">
            <FaHeart /> Wishlist
          </button>
        </div>

        {/* Fabric & Care */}
        {product.fabric && (
          <div className="mt-6">
            <h3 className="font-semibold">Fabric & Care</h3>
            <p className="mt-2 text-gray-600">{product.fabric}</p>
            <p className="text-gray-600">{product.care}</p>
          </div>
        )}

        {/* Shipping */}
        {product.shipping && (
          <div className="mt-6">
            <h3 className="font-semibold">Shipping & Returns</h3>
            <p className="mt-2 text-gray-600">{product.shipping}</p>
          </div>
        )}

        {/* Material Info */}
        {product.material && (
          <div className="p-4 mt-6 bg-gray-100 rounded-lg">
            <h3 className="font-semibold">Material</h3>
            <p className="mt-2 text-gray-600">{product.material}</p>
            <div className="flex gap-3 mt-3">
              {product.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-white border rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
