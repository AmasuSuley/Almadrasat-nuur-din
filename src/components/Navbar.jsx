import { useState, useEffect } from 'react';
import React from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSchool } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { FaMosque } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FaMosque className="text-3xl text-blue-600" />
            <span className="text-xl font-bold text-gray-800 font-serif">Al-Madrasat Nuur-Din</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" text="Home" />
            <NavLink to="/about" text="About" />
            <NavLink to="/gallery" text="Gallery" />
            <NavLink to="/news" text="News" />
            <NavLink to="/contact" text="Contact" />
           
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-xl`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink to="/" text="Home" />
          <MobileNavLink to="/about" text="About" />
          <MobileNavLink to="/gallery" text="Gallery" />
          <MobileNavLink to="/news" text="News" />
          <MobileNavLink to="/contact" text="Contact" />
          
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, text }) => (
  <Link 
    to={to} 
    className="text-gray-800 hover:text-blue-600 font-medium transition duration-300 relative group"
  >
    {text}
    <span className="absolute left-0 bottom-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

const MobileNavLink = ({ to, text }) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
  >
    {text}
  </Link>
);

export default Navbar;