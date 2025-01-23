"use client"
import React from "react";

const FooterCover = () => {
  return (
    <section className="relative bg-cover bg-center py-16" 
             style={{ backgroundImage: "url('/path/to/background-image.jpg')" }}>
      <div className="bg-blue-900 bg-opacity-70 text-center text-white px-8 py-16 rounded-md max-w-4xl mx-auto">
        {/* Quote */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          "Some of the History of Our Company is that we are Catching up through Video"
        </h2>
        {/* Call to Action */}
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default FooterCover;
