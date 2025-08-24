import React, { useState } from 'react';
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from '/assets/Logo.svg';
import '../index.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/product?search=${searchTerm}`);
      setSearchOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <nav className="w-full h-[10vh] px-6 flex items-center justify-evenly bg-white shadow relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" ><img src={logo} alt="Logo" className="h-10 md:h-12" /></Link>
      </div>

      {/* Desktop Links */}
      <ul className="hidden gap-6 md:flex font-montserrat">
        <li><Link to="/product" className="font-light text-[18px] hover:text-gray-500">Collection</Link></li>
        <li><a href="#" className="font-light text-[18px] hover:text-gray-500">About Us</a></li>
        <li><a href="#" className="font-light text-[18px] hover:text-gray-500">Sustainability</a></li>
        <li><a href="#" className="font-light text-[18px] hover:text-gray-500">Orders</a></li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-4 text-2xl">
        {/* Search Toggle */}
        <button onClick={() => setSearchOpen(!searchOpen)}>
          <FiSearch className="hover:text-gray-600" />
        </button>
        <Link to="/signup"><FiUser className="hover:text-gray-600" /></Link>
        <Link to="/cart"><FiShoppingBag className="hover:text-gray-600" /></Link>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Search Input (dropdown style) */}
      {searchOpen && (
        <form 
          onSubmit={handleSearchSubmit} 
          className="absolute left-0 z-50 flex items-center w-full gap-2 p-3 bg-white shadow-md top-full"
        >
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="flex-1 px-4 py-2 border rounded-md outline-none"
          />
          <button 
            type="submit" 
            className="px-4 py-2 text-white bg-black rounded-md"
          >
            Go
          </button>
        </form>
      )}

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
