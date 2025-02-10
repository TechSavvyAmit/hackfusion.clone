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
        <img
          src="/icons/Research.svg"
          alt="Reserch Icon"
          className="w-14 h-14 text-red-500 hover:scale-110 transition duration-300"
        />
      ),
    },
    {
      id: "02",
      title: "Design",
      description:
        "Planning is essential to ensure that we meet our goals effectively.",
      icon: (
        <img
          src="/icons/Design.svg"
          alt="Design Icon"
          className="w-14 h-14 text-red-500 hover:scale-110 transition duration-300"
        />
      ),
    },
    {
      id: "03",
      title: "Develop",
      description:
        "Execution is where the planning comes to life and results are achieved.",
      icon: (
        <img
          src="/icons/Develop.svg"
          alt="Develop Icon"
          className="w-14 h-14 text-red-500 hover:scale-110 transition duration-300"
        />
      ),
    },
    {
      id: "04",
      title: "Test",
      description:
        "Reviewing outcomes helps us learn and improve for future projects.",
      icon: (
        <img
          src="/icons/Test.svg"
          alt="Test Icon"
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
            \ Our Process \
          </h3>
          <h2 className="text-3xl font-bold text-gray-800 font-raleway">
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {processes.map((process, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-8 text-left relative group "
            >
              <div className="absolute top-6 left-6 bg-white p-1.5 rounded-sm">
                {process.icon}
              </div>
              <div className="absolute top-5 right-6 p-1.5 rounded-sm text-gray-400 font-raleway font-extrabold text-[48px] leading-[50px] w-[58px] h-[50px] opacity-[0.5]">
                {process.id}
              </div>

              <div className="mb-8">
                <h3 className="text-[20px] font-raleway font-extrabold text-gray-800 mb-4 mt-16 leading-[26px]">
                  {process.title}
                </h3>
                <span className="block w-20 h-1 bg-red-500 mt-1 transition-all duration-300 group-hover:w-40"></span>
              </div>

              <p className="text-[16px] font-raleway font-medium text-gray-150 leading-[26px] text-justify">
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
