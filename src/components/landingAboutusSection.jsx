"use client";
import React from "react";

const AboutUsSection = () => {
  return (
    <div className="relative bg-gray-50 py-16 px-6 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Image Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-blue-100 rounded-xl shadow-lg -z-10"></div>
          <img
            src="/about-us-image.png" // Replace with the actual image path
            alt="About Us"
            className="rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div>
          <p className="text-red-500 font-semibold text-lg">
            \ About us \
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            One of the Fastest Way to <br /> Business Growth
          </h2>
          <p className="mt-4 text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed.
          </p>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg flex items-center gap-6">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l9-7 9 7-9 7-9-7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 21V10l3-2 3 2v11"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Get Instant Professional Advice
              </h3>
              <p className="text-red-500 font-medium">
                Ready to Help : <span>+1 356 678 7897</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
