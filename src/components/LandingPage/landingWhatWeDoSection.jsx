import React from 'react';

const WhatWeDo = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-wrap items-center">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="your-image-url-here"
            alt="Team collaborating"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="text-left">
            <h3 className="text-red-500 font-semibold text-lg mb-2">
              \ What We Do \
            </h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
              We Develop Products That People Love to Use.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed.
            </p>
          </div>

          <div className="flex flex-wrap mt-6">
            {/* Vision Card */}
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <svg
                    className="w-10 h-10 text-red-500"
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
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Our Vision
                </h3>
                <p className="text-sm text-gray-600">
                  It is a long established fact that
                </p>
              </div>
            </div>

            {/* Goal Card */}
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <svg
                    className="w-10 h-10 text-red-500"
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
          <div className="mt-6">
            <button className="bg-red-500 text-white px-6 py-2 rounded-full text-lg shadow-md hover:bg-red-600">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
