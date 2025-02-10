"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-white py-4 overflow-visible">
      {" "}
      <div className="max-w-8xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-evenly">
        {/* Text Section */}
        <div className="relative flex flex-col items-start justify-center min-h-screen bg-white px-2 text-left">
          <motion.div
            className="absolute top-[20%] left-[-20%] bg-[#FF3E54] rounded-full -z-0"
            initial={{ scale: 0.8, opacity: 0.1 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 0.8 }}
            style={{
              width: "200px",
              height: "200px",
            }}
          />

          <p className="text-red-500 font-semibold text-lg z-10">
            \ We Are Here \
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900 mt-2 z-10">
            Better Insights For <br /> Business Growth
          </h1>
          <button className="mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition z-10">
            View More
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-6 lg:mt-0 lg:ml-12 relative">
          {" "}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute bg-[#FF3E54] opacity-20 rounded-full w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px]"></div>
            <div className="absolute bg-[#FF3E54] opacity-15 rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[500px] lg:h-[500px]"></div>
            <div className="absolute bg-[#FF3E54] opacity-10 rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-[380px] lg:h-[380px]"></div>
          </div>
          <img
            src="/hero-image.png"
            alt="Hero"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] rounded-full object-cover shadow-lg relative"
          />
        </div>

        {/* Right Semicircle */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div
            className="absolute bg-[#0E1F51] rounded-full -z-0"
            style={{
              width: "200px",
              height: "200px",
              top: "500px",
              left: "calc(100% - 100px)",
              opacity: 0.1,
              clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
            }}
          />
        </div>

        {/* Bottom Circle  */}
        <div
          className="absolute bg-[#E7E9EE] rounded-full opacity-50 
             w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          style={{
            bottom: "-100px",
            left: "calc(35% - 100px)", // Adjust position dynamically
            zIndex: 50,
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
