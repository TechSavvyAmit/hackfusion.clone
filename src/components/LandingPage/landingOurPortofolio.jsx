"use client";
import { useState } from "react";
import Link from "next/link";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const categories = ["ALL", "LIFE", "MOMENTS", "NATURE", "STORIES", "TRAVEL"];
  const images = [
    "https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_3.jpg",
    "https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_3.jpg",
    "https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_3.jpg",
    "https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_3.jpg",
    "https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_3.jpg",
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-red-500 font-semibold text-lg mb-2">
            \ Services \
          </h3>
          <h2 className="text-3xl font-bold text-gray-800">Our Expertise</h2>
        </div>

        <div className="flex justify-center my-6">
          {" "}
          {/* Tabs */}
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 transition duration-300 border border-gray-300 ${
                activeTab === category ? "bg-red-500 text-white" : "bg-gray-200"
              } ${index === 0 ? "rounded-l-lg" : ""} ${
                index === categories.length - 1 ? "rounded-r-lg" : ""
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mx-auto p-4">
          <div className="col-span-1 md:col-span-2">
            <img
              src={images[0]}
              alt="Work 1"
              className="w-[98%] h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={images[1]}
              alt="Work 2"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={images[2]}
              alt="Work 3"
              className="w-full h-54 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={images[3]}
              alt="Work 4"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={images[4]}
              alt="Work 5"
              className="w-full h-full object-cover rounded-lg shadow-md"
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
