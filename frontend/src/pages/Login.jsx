import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { FaApple, FaGoogle, FaFacebook } from "react-icons/fa";
import signup from "../../public/assets/Signup.jpg"
import axios from "axios";
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, form);

      localStorage.setItem("token",res.data.token);
      localStorage.setItem("user",JSON.stringify(res.data.user));
      alert("Login Succesful");
      navigate("/");
    }
    catch(err)
    {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="flex items-center justify-center w-3/4 min-h-screen mx-auto">
          {/* Left Side - Image */}
          <div className="hidden w-1/2 md:block">
            <img
              src={signup}
              alt="Signup Banner"
              className="object-cover w-[80%] h-full"
            />
          </div>
    
          {/* Right Side - Form */}
<div className="flex items-center justify-center w-full p-8 md:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 bg-white rounded-lg"
        >
          <h2 className="mb-6 text-3xl font-bold text-center">Log In</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-md"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-6 border rounded-md"
            required
          />

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-800"
          >
            Log In
          </button>

          {/* Signup link */}
          <p className="mt-4 text-sm text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-green-700 hover:underline">
              Sign Up
            </Link>
          </p>

          {/* OR separator */}
          <div className="flex items-center justify-center my-4">
            <span className="w-1/4 border-b"></span>
            <span className="mx-2 text-gray-500">Or</span>
            <span className="w-1/4 border-b"></span>
          </div>

          {/* Social Login */}
          <div className="flex justify-center gap-6 text-2xl">
            <button type="button" className="text-black hover:text-gray-600">
              <FaApple />
            </button>
            <button type="button" className="text-red-500 hover:text-red-700">
              <FaGoogle />
            </button>
            <button type="button" className="text-blue-600 hover:text-blue-800">
              <FaFacebook />
            </button>
          </div>

          {/* Forgot password */}
          <p className="mt-6 text-sm text-center text-gray-500">
            <Link to="#" className="underline">
              Forgot your password?
            </Link>
          </p>
        </form>
      </div>
        </div>
  );
}
