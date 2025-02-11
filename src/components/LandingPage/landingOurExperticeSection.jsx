"use client";
import React from "react";

const OurExpertise = () => {
  const services = [
    {
      title: "Web Design / Development",
      description:
        "We create responsive and visually appealing websites that enhance user experience and drive engagement.",
      icon: (
        <img
          src="/icons/services/webDesign.svg"
          alt="web Design Icon"
          className="w-14 h-14 text-red-500 hover:scale-110 transition duration-300"
        />
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "Our UI/UX design services focus on creating intuitive interfaces that provide a seamless user experience.",
      icon: (
        <img
          src="/icons/services/ux.svg"
          alt="UI/UX Icon"
          className="w-14 h-14 text-red-500 hover:scale-110 transition duration-300"
        />
      ),
    },
    {
      title: "Website Migration",
      description:
        "We offer seamless website migration services to ensure your site is transferred without any downtime.",
      icon: (
        <img
          src="/icons/services/web_migration.svg"
          alt="migration Icon"
          className="w-14 h-14 text-red-500 hover:scale-110 transition duration-300"
        />
      ),
    },
    {
      title: "App Development",
      description:
        "Our team specializes in developing mobile applications that are user-friendly and feature-rich.",
      icon: (
        <img
          src="/icons/services/webDevelopment.svg"
          alt="development Icon"
          className="w-14 h-14 text-red-500 hover:scale-110 transition duration-300"
        />
      ),
    },
    {
      title: "HubSpot Integration",
      description:
        "We provide HubSpot integration services to help you streamline your marketing and sales processes.",
      icon: (
        <img
          src="/icons/services/hubspot.svg"
          alt="hubspot Icon"
          className="w-14 h-14 text-red-500 hover:scale-110 transition duration-300"
        />
      ),
    },
    {
      title: "Email Marketing",
      description:
        "Our email marketing services help you reach your audience effectively and drive conversions.",
      icon: (
        <img
          src="/icons/services/emailMar.svg"
          alt="marketing Icon"
          className="w-14 h-14 text-red-500 hover:scale-110 transition duration-300"
        />
      ),
    },
  ];

  return (
    <section className="py-[100px] bg-white">
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

              <div className="mb-8 ">
                <h3 className="text-lg font-bold text-gray-800 mb-4 mt-16 font-raleway">
                  {service.title}
                </h3>
                <span className="block w-20 h-1 bg-red-500 mt-1 transition-all duration-300 group-hover:w-40"></span>
              </div>

              <p className="text-[16px] font-raleway font-medium text-gray-150 leading-[26px] text-justify">
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
