"use client";
import { useState } from "react";
import Link from "next/link";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const categories = ["ALL", "LIFE", "MOMENTS", "NATURE", "STORIES", "TRAVEL"];
  const portfolios = [
    {
      id: 1,
      image: "/portfolio/portfolio1.jpeg",
      title: "portfolio1",
    },
    {
      id: 2,
      image: "/portfolio/portfolio2.jpeg",
      title: "portfolio2",
    },
    {
      id: 3,
      image: "/portfolio/portfolio3.jpeg",
      title: "portfolio3",
    },
    {
      id: 4,
      image: "/portfolio/portfolio4.jpeg",
      title: "portfolio4",
    },
    {
      id: 5,
      image: "/portfolio/portfolio5.jpeg",
      title: "portfolio5",
    },
  ];

  return (
    <section className="py-[100px] bg-gray-100">
      <div className="max-w-8xl mx-auto container px-4">
        <div className="text-center mb-12">
          <h3 className="text-red-500 font-semibold text-lg mb-2">
            \ Portfolio \
          </h3>
          <h2 className="text-3xl font-bold text-gray-800">Our Work</h2>
        </div>

        <div className="flex justify-center flex-wrap my-6">
          {/* Tabs */}
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 transition duration-300 border border-gray-300 
        ${activeTab === category ? "bg-red-500 text-white" : "bg-white"} 
        ${index === 0 ? "rounded-l-lg" : ""} 
        ${index === categories.length - 1 ? "rounded-r-lg" : ""} 
        sm:px-6 sm:py-3 md:px-8 md:py-4
      `}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 p-8">
          {/* First Row */}
          <div className="lg:col-span-8 sm:col-span-1">
            <img
              src={portfolios[0].image}
              alt={portfolios[0].title}
              className="w-full h-[416px] object-cover rounded-lg"
            />
          </div>
          <div className="lg:col-span-4 sm:col-span-1">
            <img
              src={portfolios[1].image}
              alt={portfolios[1].title}
              className="w-full h-[416px] object-cover rounded-lg"
            />
          </div>

          {/* Second Row */}
          <div className="lg:col-span-3 sm:col-span-1">
            <img
              src={portfolios[2].image}
              alt={portfolios[2].title}
              className="w-full h-[416px] object-cover rounded-lg"
            />
          </div>
          <div className="lg:col-span-4 sm:col-span-1">
            <img
              src={portfolios[3].image}
              alt={portfolios[3].title}
              className="w-full h-[416px] object-cover rounded-lg"
            />
          </div>
          <div className="lg:col-span-5 sm:col-span-1">
            <img
              src={portfolios[4].image}
              alt={portfolios[4].title}
              className="w-full h-[416px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-8">
          <Link href="/contact">
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
