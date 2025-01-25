"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A1F44] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            
            <span className="text-lg font-semibold">Hackfusion</span>
          </div>
          <p className="text-sm text-gray-400">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://www.instagram.com" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="https://www.twitter.com" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Web Design/Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>HubSpot Integration</li>
            <li>Email Marketing</li>
            <li>Website Migration</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Career</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <div className="bg-red-500 p-2 rounded-full">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-gray-400">ReactJs Dev. (1-5 Years of Exp.)</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="bg-red-500 p-2 rounded-full">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="text-gray-400">WordPress Dev. (1-5 Years of Exp.)</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="bg-red-500 p-2 rounded-full">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-gray-400">Python Developer (1-5 Years of Exp.)</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe Us</h3>
          <p className="text-sm text-gray-400 mb-4">
            It is a long established fact that a reader will be distracted by
            the readable.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none w-full sm:rounded-r-none"
            />
            <button className="bg-red-500 px-4 py-2 mt-2 sm:mt-0 sm:rounded-r-md w-full sm:w-auto hover:bg-red-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
