import '../index.css'
import { FaInstagram, FaFacebookF, FaPinterestP, FaTiktok } from "react-icons/fa";
import emailjs from '@emailjs/browser'
import { useState } from 'react';

export default function Footer() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_oxmfpha",      
        "template_9n652ot",     
        {
          user_email: form.email,
          message: form.message,
        },
        "h15PA1Z19n-vjWrgk"     
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send. Try again!");
        }
      );
  };

  return (
    <footer className="bg-[#404040] text-gray-300 px-6 md:px-12 py-6 text-center">
      {/* Top Grid */}
      <div className="grid grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-3">
        
        {/* Newsletter / Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Stay Connected – Subscribe & Send Us a Note
          </h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email Address"
              required
              className="w-full px-3 py-2 text-black bg-white rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="3"
              className="w-full px-3 py-2 text-black bg-white rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-2 text-white bg-gray-700 rounded-md md:w-auto hover:bg-gray-600"
            >
              Send →
            </button>
          </form>
          {status && <p className="mt-2 text-sm">{status}</p>}
        </div>

        {/* Help */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Help & Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Orders & Shipping</a></li>
            <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Join */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Join Up</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Modimal Club</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Visit Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col items-center justify-center pt-6 mt-12 border-gray-700 md:flex-row">
        {/* Social Icons */}
        <div className="flex gap-6 mb-4 text-xl md:mb-0">
          <a href="#"><FaInstagram className="hover:text-white" /></a>
          <a href="#"><FaFacebookF className="hover:text-white" /></a>
          <a href="#"><FaPinterestP className="hover:text-white" /></a>
          <a href="#"><FaTiktok className="hover:text-white" /></a>
        </div>

      </div>
    </footer>
  );
}
