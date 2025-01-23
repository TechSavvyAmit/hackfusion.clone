"use client"
import React from "react";

const ContactUs = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Contact Form */}
        <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 w-full md:w-2/3">
          <h3 className="text-red-500 font-semibold text-lg mb-2">
            \ Get In Touch \
          </h3>
          <h2 className="text-3xl font-bold mb-8">Hey! Let's Talk</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition"
            >
              Send Now
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="w-full md:w-1/3">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-3xl">&#128222;</div>
              <div>
                <h4 className="font-bold text-lg text-red-500">Call Anytime:</h4>
                <p className="text-sm">+91 23678 27867</p>
                <p className="text-sm">+91 67678 92878</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-3xl">&#9993;</div>
              <div>
                <h4 className="font-bold text-lg text-red-500">Send Email:</h4>
                <p className="text-sm">connect@itfirms.com</p>
                <p className="text-sm">hello@itfirms.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-3xl">&#128205;</div>
              <div>
                <h4 className="font-bold text-lg text-red-500">Visit Us:</h4>
                <p className="text-sm">
                  20 Island Park Road,
                  <br />
                  New Jersey, New York, USA
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h4 className="font-bold text-lg mb-4">Follow us</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
