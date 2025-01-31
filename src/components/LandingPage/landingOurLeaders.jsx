"use client";
import React from "react";

const OurLeaders = () => {
  const team = [
    {
      name: "Larry F. Burnett",
      role: "CEO",
      image: "/leaders/leader1.jpg", // Replace with actual image paths
    },
    {
      name: "Meghan J. Webb",
      role: "CTO",
      image: "/leaders/leader2.jpg", // Replace with actual image paths
    },
    {
      name: "Hrithik",
      role: "CFO",
      image: "/leaders/leader3.jpg", // Replace with actual image paths
    },
    {
      name: "Diana H. Williams",
      role: "COO",
      image: "/leaders/leader4.jpg", // Replace with actual image paths
    },
  ];

  return (
    <section className="py-16 bg-gray-50 font-raleway">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-red-500 font-semibold text-lg mb-2">\ Team \</h3>
        <h2 className="text-4xl font-bold text-gray-900">Our Leaders</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((leader, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Leader Image with Fixed Size */}
            <img
              src={leader.image}
              alt={leader.name}
              className="w-[263px] h-[300px] object-cover rounded-lg shadow-lg"
            />

            {/* Name and Role Outside Image */}
            <h3 className="text-xl font-bold text-red-500 mt-4">
              {leader.name}
            </h3>
            <p className="text-gray-800 text-sm">{leader.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurLeaders;
