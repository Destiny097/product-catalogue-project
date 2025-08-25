import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import '../index.css';
import { Link } from "react-router-dom";
export default function BestSellers() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts = async() =>{
      try{
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products`);
        const data = await res.json();
        console.log("Fetched Products");
        setProducts(data);
      }
      catch(err)
      {
        console.error(err);
      }
    };

    fetchProducts();
  },[]);
  return (
    <section className="w-[90%] max-w-8xl px-4 py-12 mx-auto md:px-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold md:text-3xl">Best Sellers</h2>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <div key={product._id} className="relative group">
              {/* Image */}
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-300"
                />
                {/* Heart Icon */}
                <button className="absolute p-2 bg-white rounded-full shadow-md top-3 right-3 hover:bg-gray-100">
                  <FiHeart />
                </button>
              </div>

              {/* Info */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.subtitle}</p>
                <div className="flex items-center justify-between mt-2">
                  {/* Colors */}
                  <div className="flex gap-2">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="w-4 h-4 border rounded-full"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>
                  {/* Price */}
                  <p className="font-semibold">{product.price}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
