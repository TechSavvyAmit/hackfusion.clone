"use client";
import React from "react";

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-gray-100 font-raleway">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Image Section */}
          <div className="pr-6 flex items-stretch">
            <img
              src="/whatWeDo.jpg"
              alt="Team collaborating"
              className="rounded-lg shadow-md w-full object-cover h-full"
            />
          </div>

          {/* Right Text Section */}
          <div className="pl-6 flex flex-col justify-between h-full">
            <div className="text-left">
              <h3 className="text-red-500 font-semibold text-lg mb-2">
                \ What We Do \
              </h3>
              <h2 className="text-3xl font-bold text-gray-800 mb-3 leading-tight">
                We Develop Products That People Love to Use.
              </h2>
              <p className="text-lg text-gray-600 mb-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed.
              </p>
            </div>

            {/* Vision & Goal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Vision Card */}
              <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                <div className="bg-red-500 bg-opacity-20 p-3 rounded-md">
                  <svg
                    className="w-12 h-12 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    Our Vision
                  </h3>
                  <p className="text-sm text-gray-600">
                    It is a long established fact that
                  </p>
                </div>
              </div>

              {/* Goal Card */}
              <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                <div className="bg-red-500 bg-opacity-20 p-3 rounded-md">
                  <svg
                    className="w-12 h-12 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    Our Goal
                  </h3>
                  <p className="text-sm text-gray-600">
                    It is a long established fact that
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-10 mb-6">
              <button className="bg-red-500 text-white px-8 py-3 rounded-md text-lg shadow-md hover:bg-red-600">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
