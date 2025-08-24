import React, { useState, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import prod from "../../public/assets/prods.jpg";

export default function Product() {
  const [openFilter, setOpenFilter] = useState(null);
  const [price, setPrice] = useState(500);
  const [products, setProducts] = useState([]); // fetched products
  const [filteredProducts, setFilteredProducts] = useState([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search") || "";

  // ✅ Fetch products from backend
  useEffect(()=>{
      const fetchProducts = async() =>{
        try{
          const res = await fetch(`${import.meta.env.VITE_API_BASEURL}/api/products`);
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

  // ✅ Apply filters whenever query/price/products change
  useEffect(() => {
    let filtered = products.filter((p) => {
      const productName = p.name.toLowerCase();
      const queryLower = query.toLowerCase();

      if (queryLower && productName === queryLower) return true;
      return queryLower ? productName.includes(queryLower) : true;
    });

    filtered = filtered.filter((p) => p.price <= price); // price is numeric in DB

    setFilteredProducts(filtered);
  }, [price, query, products]);

  const toggleFilter = (filter) => {
    setOpenFilter(openFilter === filter ? null : filter);
  };

  return (
    <>
      <section style={{ backgroundImage: `url(${prod})` }} className="w-full h-[60vh] bg-cover bg-no-repeat" />
      <section className="flex gap-10 px-6 py-12 md:px-12">
        {/* Sidebar Filters */}
        <aside className="w-[250px] hidden md:block">
          <h2 className="mb-6 text-xl font-semibold">Filters</h2>
          <div className="py-3 border-b">
            <button
              className="flex items-center justify-between w-full font-medium text-left"
              onClick={() => toggleFilter("Price")}
            >
              Price
              {openFilter === "Price" ? <FiMinus /> : <FiPlus />}
            </button>
            {openFilter === "Price" && (
              <div className="mt-4">
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full accent-black"
                />
                <p className="mt-2 text-sm text-gray-600">
                  Up to: <span className="font-semibold">${price}</span>
                </p>
              </div>
            )}
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <h2 className="mb-6 text-xl font-semibold">
            Showing results for: <span className="italic">"{query}"</span>
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link to={`/product/${product._id}`} key={product._id}>
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src={product.image} // ✅ Coming from DB
                        alt={product.name}
                        className="object-cover w-full h-[350px] group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.subtitle}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex gap-2">
                          {product.colors.map((color, index) => (
                            <span
                              key={index}
                              className="w-4 h-4 border rounded-full"
                              style={{ backgroundColor: color }}
                            ></span>
                          ))}
                        </div>
                        <p className="font-semibold">${product.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
