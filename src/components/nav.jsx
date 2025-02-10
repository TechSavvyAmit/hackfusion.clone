"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <div className="max-w-7xl mx-auto ">
        <div className="py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="ml-3 flex items-center space-x-2">
              <div className="py-2 w-16 h-12 overflow-hidden">
                {" "}
                {/* Increased size */}
                <Image
                  src="/logo.png"
                  alt="HackFusion Logo"
                  width={120} // Increased width
                  height={140} // Increased height
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-blue-900">
                HackFusion
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-blue-900">
            <Link
              href="/about"
              className="hover:underline hover:decoration-[#FF3E54] hover:decoration-2 transition-all"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:underline hover:decoration-[#FF3E54] hover:decoration-2 transition-all"
            >
              Our Services
            </Link>
            <Link
              href="/portfolio"
              className="hover:underline hover:decoration-[#FF3E54] hover:decoration-2 transition-all"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="hover:underline hover:decoration-[#FF3E54] hover:decoration-2 transition-all"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:underline hover:decoration-[#FF3E54] hover:decoration-2 transition-all"
            >
              Contact
            </Link>
            <Link
              href="/get-in-touch"
              className="bg-[#FF3E54] text-white px-5 py-2 rounded-md shadow-lg hover:bg-[#FF2438] transition-all duration-200"
            >
              Get in Touch
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
            className={`md:hidden fixed top-0 left-0 right-0 h-1/2 bg-white z-50 flex flex-col items-center justify-center space-y-6 text-blue-900 transition-transform duration-300 ease-in-out ${
              showMenu
                ? "transform translate-y-0"
                : "transform -translate-y-full"
            }`}
          >
            <Link
              href="/about"
              className="text-lg font-medium hover:underline hover:decoration-[#FF3E54] hover:decoration-2"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium hover:underline hover:decoration-[#FF3E54] hover:decoration-2"
            >
              Our Services
            </Link>
            <Link
              href="/portfolio"
              className="text-lg font-medium hover:underline hover:decoration-[#FF3E54] hover:decoration-2"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="text-lg font-medium hover:underline hover:decoration-[#FF3E54] hover:decoration-2"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium hover:underline hover:decoration-[#FF3E54] hover:decoration-2"
            >
              Contact
            </Link>
            <Link
              href="/get-in-touch"
              className="bg-[#FF3E54] text-white px-5 py-2 rounded-md shadow-lg hover:bg-[#FF2438] transition-all duration-200"
            >
              Get in Touch
            </Link>

            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-blue-900 hover:text-gray-500"
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
      </div>
    </nav>
  );
};

export default Navbar;
