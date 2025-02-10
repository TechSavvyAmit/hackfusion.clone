"use client";
import React from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaReact, FaWordpress, FaPython } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A1F44] text-white py-16 font-raleway">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-2 mb-3 sm:mb-4">
            <div className="py-1 w-16 h-12 overflow-hidden">
              <Image
                src="/logo.png"
                alt="HackFusion Logo"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold cursor-pointer transition-all duration-300 hover:text-gray-400 hover:shadow-md">
              HackFusion
            </span>
          </div>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at.
          </p>
          <div className="flex flex-wrap items-center space-x-3 mt-4">
            {["linkedin", "instagram", "facebook", "twitter"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="bg-white p-2 flex items-center justify-center rounded-md text-red-500 hover:bg-red-500 hover:text-white transition w-8 h-8 sm:w-10 sm:h-10"
              >
                <i className={`fab fa-${icon} text-lg sm:text-xl`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 relative w-fit pb-1 group cursor-pointer">
            Services
            <span className="block w-1/2 h-1 bg-red-500 mt-1 transition-all duration-300 group-hover:w-full"></span>
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-lg">
            {[
              "Web Design/Development",
              "App Development",
              "UI/UX Design",
              "HubSpot Integration",
              "Email Marketing",
              "Website Migration",
            ].map((service, index) => (
              <li
                key={index}
                className="hover:text-white transition cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Career */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 relative w-fit pb-1 group cursor-pointer">
            Career
            <span className="block w-1/2 h-1 bg-red-500 mt-1 transition-all duration-300 group-hover:w-full"></span>
          </h3>
          <ul className="space-y-3 sm:space-y-5">
            {[
              { icon: <FaReact />, text: "ReactJs Dev." },
              { icon: <FaWordpress />, text: "WordPress Dev." },
              { icon: <FaPython />, text: "Python Developer" },
            ].map((career, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer"
              >
                <div className="bg-white p-2 sm:p-3 rounded-md group-hover:bg-red-500 transition">
                  <span className="text-red-500 text-xl sm:text-2xl group-hover:text-white transition">
                    {career.icon}
                  </span>
                </div>
                <div>
                  <span className="text-red-500 text-base sm:text-lg font-medium">
                    {career.text}
                  </span>
                  <p className="text-gray-400 text-xs sm:text-base">
                    1-5 Years of Exp.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 relative w-fit pb-1 group cursor-pointer">
            Subscribe Us
            <span className="block w-1/2 h-1 bg-red-500 mt-1 transition-all duration-300 group-hover:w-full"></span>
          </h3>
          <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
            It is a long established fact that a reader will be distracted by
            the readable.
          </p>
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-gray-900 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 text-sm sm:text-base"
            />
            <button className="w-full bg-red-500 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300 text-sm sm:text-base">
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
