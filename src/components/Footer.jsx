import React, { useState } from "react";

import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
// import instagram from "../assets/instagram.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Footer form submitted:", formData);
    // Handle form submission here
  };

  const sectors = {
    "Cincobit Technology": "https://cincobit.com",
    "Venta Distribution": "https://ventauae.com",
    "QuinTech Centre for Applied Sciences Global (QCAS Global) Limited":
      "https://qcas.global",
  };

  return (
    <footer className="bg-[#0F1F44] text-white m-4 sm:m-8 md:m-12 py-10 sm:py-12 px-6 sm:px-10 md:px-14 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">{/* phone icon */}</div>
              <a
                href="tel:+971048245784"
                className="text-[16px] font-light leading-[27px]"
              >
                +971 (0) 4 824 5784
              </a>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">{/* email icon */}</div>
              <a
                href="mailto:info@pentacore.ae"
                className="text-[16px] font-light leading-[27px]"
              >
                info@pentacore.ae
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">{/* location icon */}</div>
              <div>
                <p className="text-[16px] font-light leading-[27px]">
                  Office No. 2207, Emirates Financial Towers
                </p>
                <p className="text-[16px] font-light leading-[27px]">
                  DIFC, Dubai, UAE, +971 (0) 4 824 5784
                </p>
                <p className="text-[16px] font-light leading-[27px]">
                  www.pentacore.ae
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-[14px] font-medium leading-[20px] pb-4">
              Business Sectors
            </h3>
            <div className="space-y-4">
              {Object.entries(sectors).map(([sector, url]) => (
                <div key={sector} className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-white flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] text-white/85 hover:text-white cursor-pointer transition"
                  >
                    {sector}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-[14px] font-medium leading-[20px] pb-4">
              Contact Us
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-[#D6BA73] outline-none"
                required
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+12 345 678 90"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-[#D6BA73] outline-none"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="yourname@gmail.com"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-[#D6BA73] outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here"
                  rows={4}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-[#D6BA73] outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm text-center">© 2025 PENTACORE</p>
          <div className="flex space-x-3">
            {[instagram, facebook, youtube, linkedin].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-500 transition"
              >
                <img src={icon} alt="social-icon" className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
