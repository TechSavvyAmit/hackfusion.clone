"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-white py-16 px-6 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:max-w-lg">
          <p className="text-red-500 font-semibold text-lg">
            \ We Are Here \
          </p>
          <h1 className="mt-4 text-4xl font-bold text-gray-900 leading-snug">
            Better Insights For <br /> Business Growth
          </h1>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block bg-red-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
            >
              View More
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 lg:ml-12 relative">
          <div className="absolute inset-0 bg-pink-100 rounded-full w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] -z-10"></div>
          <img
            src="/hero-image.png" // Replace with the actual image path
            alt="Hero"
            className="w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
