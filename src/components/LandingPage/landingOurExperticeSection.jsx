"use client";
import React from "react";

const OurExpertise = () => {
  const services = [
    {
      title: "Web Design / Development",
      description:
        "We create responsive and visually appealing websites that enhance user experience and drive engagement.",
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
            d="M3 3h18v18H3V3zm2 2v14h14V5H5z"
          />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "Our UI/UX design services focus on creating intuitive interfaces that provide a seamless user experience.",
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
            d="M3 10h18M10 3v18M3 3h18v18H3V3z"
          />
        </svg>
      ),
    },
    {
      title: "Website Migration",
      description:
        "We offer seamless website migration services to ensure your site is transferred without any downtime.",
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
            d="M3 5h18v14H3V5zm2 2v10h14V7H5z"
          />
        </svg>
      ),
    },
    {
      title: "App Development",
      description:
        "Our team specializes in developing mobile applications that are user-friendly and feature-rich.",
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
            d="M5 3h14v18H5V3zm2 2v14h10V5H7z"
          />
        </svg>
      ),
    },
    {
      title: "HubSpot Integration",
      description:
        "We provide HubSpot integration services to help you streamline your marketing and sales processes.",
      icon: (
        <svg
          className="w-14 h-14 text-red-500 hover:text-red-700 hover:scale-110 transition duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v18m-9-9h18M5 5l14 14M5 19L19 5"
          />
        </svg>
      ),
    },
    {
      title: "Email Marketing",
      description:
        "Our email marketing services help you reach your audience effectively and drive conversions.",
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
            d="M3 7h18M3 7l9 6 9-6M3 7v10h18V7"
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
            \ Services \
          </h3>
          <h2 className="text-3xl font-bold text-gray-800 font-raleway">
            Our Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-8 text-left relative group"
            >
              <div className="absolute top-6 left-6 bg-white p-1.5 rounded-sm">
                {service.icon}
              </div>

              {/* Title and Span Wrapper */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 mt-16  font-raleway">
                  {service.title}
                </h3>
                <span className="block w-20 h-1 bg-red-500 mt-1 transition-all duration-300 group-hover:w-40"></span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 font-raleway font-medium text-[16px] leading-[26px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
