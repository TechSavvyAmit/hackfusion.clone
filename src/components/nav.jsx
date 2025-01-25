"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white ${
        isScrolled ? "shadow-md" : ""
      } transition-shadow duration-300`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="ml-3 text-xl font-bold text-blue-900">HackFusion</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center text-blue-900">
          <Link href="/about" className="hover:underline hover:decoration-pink-500 hover:decoration-2 transition-all">
            About
          </Link>
          <Link href="/services" className="hover:underline hover:decoration-pink-500 hover:decoration-2 transition-all">
            Our Services
          </Link>
          <Link href="/portfolio" className="hover:underline hover:decoration-pink-500 hover:decoration-2 transition-all">
            Portfolio
          </Link>
          <Link href="/blog" className="hover:underline hover:decoration-pink-500 hover:decoration-2 transition-all">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline hover:decoration-pink-500 hover:decoration-2 transition-all">
            Contact
          </Link>
          <Link
            href="/get-in-touch"
            className="bg-pink-500 text-white px-5 py-2 rounded-md shadow-lg hover:bg-pink-600 transition-all duration-200"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 text-blue-900 transition-transform duration-300 ease-in-out ${
            showMenu ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
        >
          <Link href="/about" className="text-lg font-medium hover:underline hover:decoration-pink-500 hover:decoration-2">
            About
          </Link>
          <Link href="/services" className="text-lg font-medium hover:underline hover:decoration-pink-500 hover:decoration-2">
            Our Services
          </Link>
          <Link href="/portfolio" className="text-lg font-medium hover:underline hover:decoration-pink-500 hover:decoration-2">
            Portfolio
          </Link>
          <Link href="/blog" className="text-lg font-medium hover:underline hover:decoration-pink-500 hover:decoration-2">
            Blog
          </Link>
          <Link href="/contact" className="text-lg font-medium hover:underline hover:decoration-pink-500 hover:decoration-2">
            Contact
          </Link>
          <Link
            href="/get-in-touch"
            className="bg-pink-500 text-white px-6 py-3 rounded-md shadow-lg font-medium hover:bg-pink-600 transition-all duration-300"
          >
            Get In Touch
          </Link>
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
