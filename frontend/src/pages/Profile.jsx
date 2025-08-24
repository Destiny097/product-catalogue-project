import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({ name: "", email: "", address: "" });
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // Get token from localStorage
  const token = localStorage.getItem("token");

  // Fetch user profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get("/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Save changes
  const handleSave = async () => {
    try {
      const { data } = await axios.put(
        "/api/users/profile",
        { name: user.name, email: user.email, address: user.address },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser(data);
      setEditing(false);
      setSuccess("Profile updated successfully!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Failed to update profile");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove token
    navigate("/login"); // redirect to login page
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white shadow-xl rounded-2xl">
      <h1 className="mb-6 text-2xl font-bold text-center">My Profile</h1>

      {error && <p className="mb-2 text-center text-red-500">{error}</p>}
      {success && <p className="mb-2 text-center text-green-600">{success}</p>}

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            disabled={!editing}
            onChange={handleChange}
            className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none ${
              editing ? "bg-white border-gray-300" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            disabled={!editing}
            onChange={handleChange}
            className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none ${
              editing ? "bg-white border-gray-300" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={user.address || ""}
            disabled={!editing}
            onChange={handleChange}
            className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none ${
              editing ? "bg-white border-gray-300" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          {editing ? (
            <>
              <button
                onClick={() => setEditing(false)}
                className="px-4 py-2 text-white bg-gray-400 rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
