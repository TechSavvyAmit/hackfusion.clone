"use client"
import React from "react";

const OurLeaders = () => {
  const team = [
    {
      name: "Larry F. Burnett",
      role: "CEO",
      image: "/images/larry.jpg", // Replace with actual image paths
    },
    {
      name: "Meghan J. Webb",
      role: "CTO",
      image: "/images/meghan.jpg", // Replace with actual image paths
    },
    {
      name: "Yvonne J. Cullum",
      role: "CFO",
      image: "/images/yvonne.jpg", // Replace with actual image paths
    },
    {
      name: "Diana H. Williams",
      role: "COO",
      image: "/images/diana.jpg", // Replace with actual image paths
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-red-500 font-semibold text-lg mb-2">\ Team \</h3>
          <h2 className="text-3xl font-bold text-gray-800">Our Leaders</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md text-center p-4"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{leader.name}</h3>
              <p className="text-red-500 text-sm font-semibold">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLeaders;
