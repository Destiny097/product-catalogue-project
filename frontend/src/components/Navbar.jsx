import React, { useState } from 'react';
import '../index.css';
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import logo from '/assets/Logo.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[10vh] px-6 flex items-center justify-evenly bg-white shadow">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 md:h-12" />
      </div>

      {/* Desktop Links */}
      <ul className="hidden gap-6 md:flex font-montserrat">
        <li><a href="#" className="font-light text-[18px] hover:text-gray-500">Collection</a></li>
        <li><a href="#" className="font-light text-[18px] hover:text-gray-500">New In</a></li>
        <li><a href="#" className="font-light text-[18px] hover:text-gray-500">Modiweek</a></li>
        <li><a href="#" className="font-light text-[18px] hover:text-gray-500">Plus Size</a></li>
        <li><a href="#" className="font-light text-[18px] hover:text-gray-500">Sustainability</a></li>
      </ul>

      {/* Icons */}
      <div className="flex gap-4 text-2xl">
        <a href="#"><FiSearch className="hover:text-gray-600" /></a>
        <a href="#"><FiUser className="hover:text-gray-600" /></a>
        <a href="#"><FiHeart className="hover:text-gray-600" /></a>
        <a href="#"><FiShoppingBag className="hover:text-gray-600" /></a>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-white shadow-md flex flex-col items-center py-6 md:hidden z-50">
          <a href="#" className="py-2 text-lg font-montserrat">Collection</a>
          <a href="#" className="py-2 text-lg font-montserrat">New In</a>
          <a href="#" className="py-2 text-lg font-montserrat">Modiweek</a>
          <a href="#" className="py-2 text-lg font-montserrat">Plus Size</a>
          <a href="#" className="py-2 text-lg font-montserrat">Sustainability</a>
        </div>
      )}
    </nav>
  );
}
