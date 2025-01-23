"use client";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Samual Karl",
      role: "CEO",
      feedback:
        "HackFusion transformed our online presence! Their team is professional and dedicated.",
      image: "/images/samual.jpg", // Replace with actual image paths
    },
    {
      name: "Daria Linney",
      role: "Marketing Director",
      feedback:
        "The insights provided by HackFusion helped us grow our business significantly. Highly recommend!",
      image: "/images/daria.jpg", // Replace with actual image paths
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-red-500 font-semibold text-lg mb-2">
            \ From our Customers \
          </h3>
          <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 relative"
            >
              <div className="absolute top-4 right-4 text-red-500 text-4xl">
                &#8221;
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-red-500 text-sm font-semibold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <span className="w-4 h-4 bg-red-500 rounded-full mx-1"></span>
          <span className="w-4 h-4 bg-gray-300 rounded-full mx-1"></span>
          <span className="w-4 h-4 bg-gray-300 rounded-full mx-1"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
