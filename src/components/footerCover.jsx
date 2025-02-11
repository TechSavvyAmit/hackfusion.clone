"use client";
import React from "react";

const FooterCover = () => {
  return (
    <section className="relative bg-cover bg-center py-20 px-6 md:px-8">
      <div className="relative text-center text-white px-6 md:px-12 py-16 rounded-xl max-w-4xl mx-auto overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contactus.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>

        <div className="relative z-10">
          <h2 className="text-xl md:text-3xl font-semibold mb-6 leading-relaxed">
            "Some of the History of Our Company is that we are Catching up
            through Video"
          </h2>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterCover;
