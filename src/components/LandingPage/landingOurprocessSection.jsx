"use client";
import React from "react";

const OurProcess = () => {
  const processes = [
    {
      id: "01",
      title: "Research",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
      icon: (
        <svg
          className="w-14 h-14 text-red-500 hover:text-red-700 hover:scale-110 transition duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Design",
      description:
        "Planning is essential to ensure that we meet our goals effectively.",
      icon: (
        <svg
          className="w-14 h-14 text-red-500 hover:text-red-700 hover:scale-110 transition duration-300"
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
      ),
    },
    {
      id: "03",
      title: "Develop",
      description:
        "Execution is where the planning comes to life and results are achieved.",
      icon: (
        <svg
          className="w-14 h-14 text-red-500 hover:text-red-700 hover:scale-110 transition duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h18v18H3V3z"
          />
        </svg>
      ),
    },
    {
      id: "04",
      title: "Test",
      description:
        "Reviewing outcomes helps us learn and improve for future projects.",
      icon: (
        <svg
          className="w-14 h-14 text-red-500 hover:text-red-700 hover:scale-110 transition duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17l3-3 3 3m-3-3V4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-red-500 font-semibold text-lg mb-2 font-raleway">
            \ Our Process \
          </h3>
          <h2 className="text-3xl font-bold text-gray-800 font-raleway">
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-8 text-left relative group"
            >
              <div className="absolute top-6 left-6 bg-white p-1.5 rounded-sm">
                {process.icon}
              </div>
              <div className="absolute top-5 right-6 p-1.5 rounded-sm text-gray-400 font-raleway font-extrabold text-[48px] leading-[50px]">
                {process.id}
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 mt-16 font-raleway">
                  {process.title}
                </h3>
                <span className="block w-20 h-1 bg-red-500 mt-1 transition-all duration-300 group-hover:w-40"></span>
              </div>

              <p className="text-sm text-gray-150 font-raleway font-medium text-[16px] leading-[26px]">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
