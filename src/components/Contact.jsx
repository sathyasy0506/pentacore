import React, { useState } from "react";

const Contact = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      access_key: "056a4bc6-6e69-4f04-ba90-fe4e60fe6e1d",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (result.success) {
        alert("Thank you! Your message has been sent.");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was a problem submitting your form.");
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div className="text-center pt-20 pb-12">
        <div className="inline-block border border-[#D6BA73] text-[#D6BA73] bg-[#F9F3E3] rounded-full px-4 py-1 text-sm font-semibold mb-2">
          CONTACT US
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F1F44] mb-8">
          Get in touch with us
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F1F44] mb-8">
              Connect with us:
            </h2>

            <div className="space-y-8">
              {/* Phone Number */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-[#0F1F44]"
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
                  <h3 className="text-lg font-semibold text-[#0F1F44] mb-2">
                    Phone Number
                  </h3>
                  <p className="text-gray-600">
                    <a href="tel:+971048245784" className="hover:underline">
                      +971 (0) 4 824 5784
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-[#0F1F44]"
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
                  <h3 className="text-lg font-semibold text-[#0F1F44] mb-2">
                    Email Address
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:info@pentacore.ae"
                      className="hover:underline"
                    >
                      info@pentacore.ae
                    </a>
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-[#0F1F44]"
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
                  <h3 className="text-lg font-semibold text-[#0F1F44] mb-2">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    Office No. 2207, Emirates Financial Towers
                    <br />
                    DIFC, Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-5 bg-gray-50 rounded-3xl">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D6BA73] focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                </div>

                {/* Phone and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+12 345 678 90"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D6BA73] focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="yourname@gmail.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D6BA73] focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D6BA73] focus:border-transparent outline-none transition-all duration-200 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#898EA8] text-white py-4 px-6 rounded-3xl font-semibold hover:bg-[#0c1938] transition-colors duration-200 focus:ring-2 focus:ring-[#D6BA73] focus:ring-offset-2 outline-none"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="p-5">
        <div className="w-full h-96 bg-gray-200 relative overflow-hidden rounded-3xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1736842812447!2d55.14159831501394!3d25.213009983890186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d2c5555555%3A0x6c5d8f4d4d4d4d4d!2sEmirates%20Financial%20Towers%2C%20Dubai%20International%20Financial%20Centre%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pentacore Holdings Location"
          ></iframe>

          {/* Map Overlay Info */}
          <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="font-semibold text-sm">
                25°12'30.9"N 55°16'35.6"E
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-2">
              6756+CJM Dubai - United Arab Emirates
            </p>
            <button className="text-blue-600 text-xs hover:underline">
              View larger map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
