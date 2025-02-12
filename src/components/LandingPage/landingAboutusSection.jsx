"use client";
import React from "react";

const AboutUsSection = () => {
  return (
    <div className="relative bg-gray-50 py-[100px] px-6 sm:px-8 lg:px-20 font-raleway">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch gap-12">
        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-blue-100 rounded-xl shadow-lg -z-10"></div>
          <img
            src="/about-us-image.jpg"
            alt="About Us"
            className="rounded-xl object-cover shadow-lg w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center h-full text-center sm:text-left">
          <p className="text-red-500 font-semibold text-base sm:text-lg">
            \ About us \
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-snug">
            One of the Fastest Way to <br className="hidden sm:block" />{" "}
            Business Growth
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed.
          </p>
          <div className="mt-6 bg-white p-3 rounded-lg shadow-lg flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-gray-100 p-2 rounded-md">
              <img
                src="/icons/aboutus.svg"
                alt="Research Icon"
                className="w-12 sm:w-14 h-12 sm:h-14 text-red-500 hover:scale-110 transition duration-300"
              />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-medium text-gray-900">
                Get Instant Professional Advice
              </h3>
              <p className="text-red-500 font-medium text-sm sm:text-base">
                Ready to Help: <span>+1 356 678 7897</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
