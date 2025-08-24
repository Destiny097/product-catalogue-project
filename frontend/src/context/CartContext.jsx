import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart from backend
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/api/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data.cart || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  // Add to cart (optimistic update)
  const addToCart = async (product) => {
    try {
      if (!product || !product._id) {
        console.error("Invalid product passed to addToCart:", product);
        return;
      }

      // ✅ Update UI immediately
      setCart((prev) => {
        const existing = prev.find((item) => item.product._id === product._id);
        if (existing) {
          return prev.map((item) =>
            item.product._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prev, { product, quantity: 1 }];
      });

      const token = localStorage.getItem("token");
      await axios.post(
        `${import.meta.env.VITE_API_BASEURL}/api/cart` ,
        { productId: product._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      fetchCart(); // 🔄 sync again from DB
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // Remove from cart (optimistic update)
  const removeFromCart = async (productId) => {
    try {
      setCart((prev) => prev.filter((item) => item.product._id !== productId));

      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/cart/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchCart();
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
