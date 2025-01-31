"use client";
import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Samual Karl",
      role: "CEO",
      feedback:
        "HackFusion transformed our online presence! Their team is professional and dedicated.",
      image: "/testimonials/testimonial-1.jpg",
    },
    {
      name: "Daria Linney",
      role: "Marketing Director",
      feedback:
        "The insights provided by HackFusion helped us grow our business significantly. Highly recommend!",
      image: "/testimonials/testimonial-2.jpg",
    },
    {
      name: "Hrithik Roshan",
      role: "Marketing Director",
      feedback:
        "The insights provided by HackFusion helped us grow our business significantly. Highly recommend!",
      image: "/testimonials/testimonial-3.jpg",
    },
    {
      name: "John Abraham",
      role: "Marketing Producer",
      feedback:
        "Good to see that HackFusion helped us grow our business significantly. Highly recommend!",
      image: "/testimonials/testimonial-4.jpg",
    },
    {
      name: "Chris Evans",
      role: "Creative Director",
      feedback:
        "Amazing experience working with HackFusion. They exceeded our expectations.",
      image: "/testimonials/testimonial-5.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-red-500 font-semibold text-lg mb-2">
            \ From our Customers \
          </h3>
          <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="flex justify-center gap-6 items-center">
          {testimonials
            .slice(currentIndex, currentIndex + 3)
            .map((testimonial, index) => (
              <div
                key={index}
                className={`relative bg-gray-100 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
                  index === 1
                    ? "scale-110 shadow-xl opacity-100"
                    : "scale-90 opacity-70"
                }`}
                style={{
                  width: "750px",
                  height: index === 1 ? "260px" : "252px",
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-red-400 text-4xl">
                  &#8221;
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                </div>

                {/* Feedback */}
                <p className="text-sm text-gray-600">{testimonial.feedback}</p>

                {/* Name and Role Section */}
                <div className="flex flex-col items-start mt-10">
                  <h3 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-raleway font-medium text-[16px] leading-[26px]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 mx-1 rounded-full ${
                currentIndex === index ? "bg-red-500" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
