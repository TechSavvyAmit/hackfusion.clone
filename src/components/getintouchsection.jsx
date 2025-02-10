"use client";
import React from "react";
import { usePathname } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "tailwindcss/tailwind.css";

const ContactUs = () => {
  const pathname = usePathname();

  return (
    <section
      className={`${
        pathname === "/contact" ? "bg-red-50" : "bg-[#0A1D56]"
      } py-[100px] text-white font-raleway`}
    >
      <div className="text-center mb-10">
        <h3 className="text-red-500 font-semibold text-lg mb-2">
          \ Get In Touch \
        </h3>
        <h2
          className={`text-4xl font-bold ${
            pathname === "/contact" ? "text-[#0E1F51]" : "text-white"
          }`}
        >
          Hey! Let's Talk
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 md:col-span-2">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-100 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-100 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="bg-gray-100 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="bg-gray-100 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition w-full"
              >
                Send Now
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-2">
                  <div className="text-red-500 text-2xl bg-gray-100 p-3 rounded-sm transition-transform transform hover:scale-105 hover:text-red-600">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-red-500">
                    Call Anytime:
                  </h4>
                  <p className="text-sm">+91 23678 27867</p>
                  <p className="text-sm">+91 67678 92878</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2">
                  {" "}
                  <div className="text-red-500 text-2xl bg-gray-100 p-3 rounded-sm transition-transform transform hover:scale-105 hover:text-red-600">
                    <i className="fas fa-envelope"></i>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-red-500">
                    Send Email:
                  </h4>
                  <p className="text-sm">connect@itfirms.com</p>
                  <p className="text-sm">hello@itfirms.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2">
                  <div className="text-red-500 text-2xl bg-gray-100 p-3 pl-4 pr-4 rounded-sm transition-transform transform hover:scale-105 hover:text-red-600">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                </div>
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

            <div className="mt-8 text-center">
              <h4 className="font-bold text-lg mb-4">Follow us</h4>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
