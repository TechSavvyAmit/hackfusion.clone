"use client";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="ml-3 text-xl font-bold text-blue-900">HackFusion</span>
        </div>

        <div className="hidden md:flex space-x-8 items-center text-blue-900">
          <a href="/about" className="hover:text-pink-500 transition-colors" >
            About
          </a>
          <a href="/services" className="hover:text-pink-500 transition-colors">
            Our Services
          </a>
          <a href="/portfolio" className="hover:text-pink-500 transition-colors">
            Portfolio
          </a>
          <a href="/blog" className="hover:text-pink-500 transition-colors">
            Blog
          </a>
          <a href="/contact" className="hover:text-pink-500 transition-colors">
            Contact
          </a>
          <a
            href="/get-in-touch"
            className="bg-pink-500 text-white px-5 py-2 rounded-md shadow-lg hover:bg-pink-600 transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={showMenu}
        >
          <svg
            className="w-8 h-8 text-blue-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 text-blue-900 transition-transform duration-300 ease-in-out ${
            showMenu ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
        >
          <a href="/about" className="text-lg font-medium hover:text-pink-500">
            About
          </a>
          <a href="/services" className="text-lg font-medium hover:text-pink-500">
            Our Services
          </a>
          <a href="/portfolio" className="text-lg font-medium hover:text-pink-500">
            Portfolio
          </a>
          <a href="/blog" className="text-lg font-medium hover:text-pink-500">
            Blog
          </a>
          <a href="/contact" className="text-lg font-medium hover:text-pink-500">
            Contact
          </a>
          <a
            href="/get-in-touch"
            className="bg-pink-500 text-white px-6 py-3 rounded-md shadow-lg font-medium hover:bg-pink-600 transition-all duration-300"
          >
            Get In Touch
          </a>
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-blue-900 hover:text-gray-500"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
