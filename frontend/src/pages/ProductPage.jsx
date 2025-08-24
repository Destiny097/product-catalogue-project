import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("");

  const product = {
    name: "Wrap Top",
    price: 160,
    description:
      "Versatile and universally flattering, our wrap blouse can be tied, draped, snapped and wrapped multiple ways.",
    colors: ["white", "red"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/product1.jpg",
      "/images/product2.jpg",
      "/images/product3.jpg",
    ],
    fabric: "62% Nylon, 38% Elastane, 100% Vegan Materials",
    care: "Cold Machine Wash, Line Dry. Do not tumble dry or use bleach.",
    shipping:
      "Free on US orders. Canada orders $175. Returns allowed within 30 days (unworn items only).",
    material:
      "This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. OEKO-TEX® Certified.",
    tags: ["Quick Dry", "Chemical Free", "Machine Washable"],
  };

  return (
    <div className="grid max-w-6xl gap-10 p-6 mx-auto md:grid-cols-2">
      {/* Left: Product Images */}
      <div>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full shadow-md rounded-xl"
        />
        <div className="flex gap-3 mt-3">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="thumb"
              className="object-cover w-20 h-20 border rounded-md cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Right: Product Details */}
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="mt-4 text-xl font-semibold">${product.price}</p>

        {/* Colors */}
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

        {/* Size */}
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

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="flex-1 py-3 text-white bg-green-700 rounded-lg hover:bg-green-800">
            Add to Cart
          </button>
          <button className="flex items-center gap-2 px-4 py-3 border rounded-lg hover:bg-gray-100">
            <FaHeart /> Wishlist
          </button>
        </div>

        {/* Fabric & Care */}
        <div className="mt-6">
          <h3 className="font-semibold">Fabric & Care</h3>
          <p className="mt-2 text-gray-600">{product.fabric}</p>
          <p className="text-gray-600">{product.care}</p>
        </div>

        {/* Shipping */}
        <div className="mt-6">
          <h3 className="font-semibold">Shipping & Returns</h3>
          <p className="mt-2 text-gray-600">{product.shipping}</p>
        </div>

        {/* Material Info */}
        <div className="p-4 mt-6 bg-gray-100 rounded-lg">
          <h3 className="font-semibold">Material</h3>
          <p className="mt-2 text-gray-600">{product.material}</p>
          <div className="flex gap-3 mt-3">
            {product.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-white border rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
