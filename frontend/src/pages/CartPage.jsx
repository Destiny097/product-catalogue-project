import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../index.css"
export default function CartPage() {
  const { cart, removeFromCart, loading } = useContext(CartContext);

  if (loading) {
    return (
      <div className="px-6 py-12 md:px-12">
        <h2 className="mb-6 text-2xl font-bold">Your Cart</h2>
        <p>Loading cart...</p>
      </div>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="px-6 py-12 md:px-12">
      <h2 className="mb-6 text-2xl font-bold">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">
          {cart.map((item) => (
            <div
              key={item.product._id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="object-cover w-24 h-24 rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.product.name}</h3>
                  <p className="text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  ${item.product.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.product._id)}
                  className="mt-2 text-sm text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-8 text-right">
          <p className="text-xl font-bold">Total: ${total}</p>
          <button className="px-6 py-2 mt-4 text-white bg-black rounded-lg">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
