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

  return (
    <footer className="bg-[#0F1F44] text-white m-12 py-14 px-14 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[16px] font-light leading-[27px] text-white">
                  +971 (0) 4 824 5784
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[16px] font-light leading-[27px] text-white">
                  info@pentacore.ae
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[16px] font-light leading-[27px] text-white">
                  Office No. 2207, Emirates Financial Towers
                </p>
                <p className="text-[16px] font-light leading-[27px] text-white">
                  DIFC, Dubai, UAE, +971 (0) 4 824 5784
                </p>
                <p className="text-[16px] font-light leading-[27px] text-white">
                  www.pentacore.ae
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column - Business Sectors */}
          <div>
            <h3 className="text-[14px] font-medium leading-[20px] text-white pb-4">
              Business Sectors
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-[#D6BA73]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[rgba(255,255,255,0.847)] text-[16px] leading-[20px] font-normal hover:text-white transition-colors duration-200 cursor-pointer">
                  Cincobit Technology
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-[#D6BA73]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[rgba(255,255,255,0.847)] text-[16px] leading-[20px] font-normal hover:text-white transition-colors duration-200 cursor-pointer">
                  Venta Distribution
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-[#D6BA73]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[rgba(255,255,255,0.847)] text-[16px] leading-[20px] font-normal hover:text-white transition-colors duration-200 cursor-pointer">
                  Qiuntech
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 className="text-[14px] font-medium leading-[20px] text-white pb-4">
              Name
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-[#D6BA73] focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>

              {/* Phone and Email Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+12 345 678 90"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-[#D6BA73] focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="yourname@gmail.com"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-[#D6BA73] focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here"
                  rows={4}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-[#D6BA73] focus:border-transparent outline-none transition-all duration-200 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">Copy right : 2025 @PENTACORE</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-200"
            >
              <img src={instagram} alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white
 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-200"
            >
              <img src={facebook} alt="Facebook" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white
 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-200"
            >
              <img src={youtube} alt="YouTube" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white
 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-200"
            >
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
