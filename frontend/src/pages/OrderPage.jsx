import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get("/api/orders/myorders", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // ✅ Ensure orders is always an array
        const formattedOrders = Array.isArray(data)
          ? data
          : data.orders || [];

        setOrders(formattedOrders);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [token]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-2xl p-6 mx-auto mt-10 bg-white shadow-xl rounded-2xl">
      <h1 className="mb-6 text-2xl font-bold text-center">My Orders</h1>
      {error && <p className="text-center text-red-500">{error}</p>}

      {orders.length === 0 ? (
        <p className="text-center text-gray-600">No past orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order._id}
              className="p-4 transition border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <p className="font-semibold">Total: ₹{order.totalPrice}</p>
              <ul className="mt-2 text-sm text-gray-600">
                {order.items?.map((item, idx) => (
                  <li key={idx}>
                    {item.qty} × {item.name} — ₹{item.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
