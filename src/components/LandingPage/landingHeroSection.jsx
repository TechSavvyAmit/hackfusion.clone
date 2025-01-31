"use client";
import React from "react";
import { motion, useAnimation, useScroll } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-evenly">
        {/* Text Section */}
        <div className="relative flex flex-col items-start justify-center min-h-screen bg-white px-4 text-left">
          <motion.div
            className="absolute top-[20%] left-[-15%] bg-red-200 rounded-full -z-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              width: "30vw",
              height: "30vw",
              maxWidth: "180px",
              maxHeight: "180px",
            }}
          />

          <p className="text-red-500 font-semibold text-lg z-10">
            \ We Are Here \
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mt-2 z-10">
            Better Insights For <br /> Business Growth
          </h1>
          <button className="mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition z-10">
            View More
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 lg:ml-12 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute bg-[#FF6B57] opacity-30 rounded-full w-72 h-72 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px]"></div>
            <div className="absolute bg-[#FF6B57] opacity-50 rounded-full w-56 h-56 md:w-72 md:h-72 lg:w-[500px] lg:h-[500px]"></div>
            <div className="absolute bg-[#FF6B57] opacity-70 rounded-full w-40 h-40 md:w-56 md:h-56 lg:w-[380px] lg:h-[380px]"></div>
          </div>

          <img
            src="/hero-image.png"
            alt="Hero"
            className="w-72 h-72 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] rounded-full object-cover shadow-lg relative"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
