"use client";
import React from "react";
import { usePathname } from "next/navigation";

const OurLeaders = () => {
  const pathname = usePathname();
  const team = [
    {
      name: "Larry F. Burnett",
      role: "CEO",
      image: "/leaders/leader1.jpg",
    },
    {
      name: "Meghan J. Webb",
      role: "CTO",
      image: "/leaders/leader2.jpg",
    },
    {
      name: "Hrithik",
      role: "CFO",
      image: "/leaders/leader3.jpg",
    },
    {
      name: "Diana H. Williams",
      role: "COO",
      image: "/leaders/leader4.jpg",
    },
    {
      name: "Larry F. Burnett",
      role: "CEO",
      image: "/leaders/leader1.jpg",
    },
    {
      name: "Meghan J. Webb",
      role: "CTO",
      image: "/leaders/leader2.jpg",
    },
    {
      name: "Hrithik",
      role: "CFO",
      image: "/leaders/leader3.jpg",
    },
    {
      name: "Diana H. Williams",
      role: "COO",
      image: "/leaders/leader4.jpg",
    },
  ];

  const displayedTeam = pathname === "/about" ? team : team.slice(0, 4);

  return (
    <section
      className={`${
        pathname === "/about" ? "bg-white" : "bg-gray-50"
      } py-[100px] font-raleway`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-red-500 font-semibold text-lg mb-2">\ Team \</h3>
        <h2 className="text-4xl font-bold text-gray-900">Our Leaders</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {displayedTeam.map((leader, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[263px] h-auto sm:h-[260px] lg:h-[300px] object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-lg sm:text-xl font-bold text-red-500 mt-3 sm:mt-4">
              {leader.name}
            </h3>
            <p className="text-gray-800 text-xs sm:text-sm">{leader.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurLeaders;
