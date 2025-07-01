import React, { useState } from "react";
import heroImage from "../assets/hero.jpg";
import handShake from "../assets/handShake.jpg";
import play from "../assets/play.jpg";
import robo from "../assets/robo.jpg";
import lock from "../assets/lock.jpg";
import section3 from "../assets/section3.1.jpg";
import l8 from "../assets/l8.jpg";

import group1 from "../assets/Group1.svg";
import group2 from "../assets/Group2.svg";
import group3 from "../assets/Group3.svg";
import group4 from "../assets/Group4.svg";
import group5 from "../assets/Group5.svg";
import group6 from "../assets/Group6.svg";

import OurWorkSection from "./Portfolio";
import Responsive from "./ResponsiveSector";
import Sector from "./Sector";

import { useNavigate } from "react-router-dom"; // Add at top

const Home = () => {
  const [activePhilosophy, setActivePhilosophy] = useState("vision");
  const navigate = useNavigate(); // Inside component

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(184, 182, 182, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        }}
      >
        <div className="w-full px-4 sm:mx-10 md:mx-20 text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-[58px] font-semibold leading-[1.2] md:leading-[72px] text-white mb-6 animate-fade-in-up">
              Strategic Investments. Sustainable
              <br className="hidden sm:block" />
              Growth. Innovation-led Future.
            </h1>

            <button
              className="group relative inline-flex items-center bg-white text-[#0F1F44] rounded-full pl-8 sm:pl-12 pr-4 py-3 w-56 sm:w-64 hover:bg-gray-100 transition-colors duration-300 overflow-hidden"
              onClick={() => navigate("/about")} // Replace existing logic
            >
              <span className="transform transition-transform duration-500 group-hover:translate-x-2 sm:group-hover:translate-x-4 text-sm sm:text-base">
                View More Details
              </span>
              <span className="absolute top-1/2 transform -translate-y-1/2 right-4 transition-transform duration-500 group-hover:translate-x-[-8.75rem] sm:group-hover:translate-x-[-11.75rem] w-6 h-6 sm:w-8 sm:h-8 bg-[#0F1F44] rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-3 space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold leading-[1.3] md:leading-[55.44px] text-[rgb(12,12,60)]">
                Pentacore Holdings is a DIFC-based investment holding company
                focused on building a diversified portfolio across
                biotechnology, information technology, food & beverage, and
                other high-growth sectors. We invest, manage, and scale
                businesses that align with innovation, sustainability, and
                long-term value creation.
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-[16px] font-normal leading-[1.6] md:leading-[28.8px] text-[rgb(109,109,115)]">
                  We specialize in acquiring, managing, and cultivating a
                  diverse portfolio of investments across high-growth sectors
                  including{" "}
                  <span className="font-semibold text-gray-800">
                    biotechnology, information technology, food processing,
                    retail,
                  </span>{" "}
                  and more. Beyond direct investments, we provide essential
                  headquarter services and comprehensive treasury & financial
                  solutions to our related entities.
                </p>

                <p className="text-sm sm:text-[16px] font-normal leading-[1.6] md:leading-[28.8px] text-[rgb(109,109,115)]">
                  Leveraging the{" "}
                  <span className="font-semibold text-gray-800">
                    DIFC's world-class, business-friendly ecosystem,
                  </span>{" "}
                  we are strategically positioned to capitalize on the immense
                  economic potential of the{" "}
                  <span className="font-semibold text-gray-800">
                    UAE, the broader Middle East and North Africa (MENA) region,
                    and key international markets.
                  </span>{" "}
                  Our approach is designed to foster growth and deliver value
                  across a global landscape.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="w-full max-w-lg">
                <div
                  className="rounded-3xl p-3 shadow-lg h-full"
                  style={{ backgroundColor: "#EAEBEC" }}
                >
                  <div className="h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
                    <img
                      src={handShake}
                      alt="Business handshake representing partnership and collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block border border-[#D6BA73] text-[#D6BA73] bg-[#F9F3E3] rounded-full px-4 py-1 text-sm font-semibold mb-2">
              WHY US
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium leading-[1.2] md:leading-[57.6px] text-[#15254C]">
              Our Core Values
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Column - Values */}
            <div className="space-y-8 md:space-y-12 order-1 lg:order-1">
              {/* Integrity and Transparency */}
              <div className="text-left">
                <img
                  src={group1}
                  alt="Integrity Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
                />
                <h3 className="text-lg sm:text-[20px] font-medium leading-[1.4] sm:leading-[28px] text-[#15254C] mb-2">
                  Integrity and Transparency
                </h3>
                <p className="text-sm sm:text-[16px] font-normal leading-[1.5] sm:leading-[24px] text-[#6D6D73]">
                  Building trust through honest and open practices.
                </p>
              </div>

              {/* Excellence in Governance */}
              <div className="text-left">
                <img
                  src={group2}
                  alt="Governance Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
                />
                <h3 className="text-lg sm:text-[20px] font-medium leading-[1.4] sm:leading-[28px] text-[#15254C] mb-2">
                  Excellence in Governance
                </h3>
                <p className="text-sm sm:text-[16px] font-normal leading-[1.5] sm:leading-[24px] text-[#6D6D73]">
                  Upholding world-class standards of oversight and
                  accountability.
                </p>
              </div>

              {/* Strategic Growth */}
              <div className="text-left">
                <img
                  src={group3}
                  alt="Growth Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
                />
                <h3 className="text-lg sm:text-[20px] font-medium leading-[1.4] sm:leading-[28px] text-[#15254C] mb-2">
                  Strategic Growth
                </h3>
                <p className="text-sm sm:text-[16px] font-normal leading-[1.5] sm:leading-[24px] text-[#6D6D73]">
                  Pursuing scalable, long-term investments that deliver
                  measurable value.
                </p>
              </div>
            </div>

            {/* Center Column - Image */}
            <div className="flex justify-center order-3 lg:order-2">
              <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={play}
                  alt="Hands working with puzzle pieces representing collaboration and problem-solving"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Values */}
            <div className="space-y-8 md:space-y-12 order-2 lg:order-3">
              {/* Commitment to Sustainability */}
              <div className="text-left">
                <img
                  src={group4}
                  alt="Sustainability Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
                />
                <h3 className="text-lg sm:text-[20px] font-medium leading-[1.4] sm:leading-[28px] text-[#15254C] mb-2">
                  Commitment to Sustainability
                </h3>
                <p className="text-sm sm:text-[16px] font-normal leading-[1.5] sm:leading-[24px] text-[#6D6D73]">
                  Investing responsibly for a resilient, environmentally
                  conscious future.
                </p>
              </div>

              {/* Empowerment & Collaboration */}
              <div className="text-left">
                <img
                  src={group5}
                  alt="Collaboration Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
                />
                <h3 className="text-lg sm:text-[20px] font-medium leading-[1.4] sm:leading-[28px] text-[#15254C] mb-2">
                  Empowerment & Collaboration
                </h3>
                <p className="text-sm sm:text-[16px] font-normal leading-[1.5] sm:leading-[24px] text-[#6D6D73]">
                  Fostering synergy and growth across our subsidiaries and
                  teams.
                </p>
              </div>

              {/* Performance with Purpose */}
              <div className="text-left">
                <img
                  src={group6}
                  alt="Performance Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
                />
                <h3 className="text-lg sm:text-[20px] font-medium leading-[1.4] sm:leading-[28px] text-[#15254C] mb-2">
                  Performance with Purpose
                </h3>
                <p className="text-sm sm:text-[16px] font-normal leading-[1.5] sm:leading-[24px] text-[#6D6D73]">
                  Measuring success by both financial results and positive
                  societal impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <OurWorkSection />

      {/* Business Sectors Section */}
      {/* Show Sector on desktop, Responsive on tablet/mobile */}
      <div>
        <div className="hidden lg:block">
          <Sector />
        </div>
        <div className="block lg:hidden">
          <Responsive />
        </div>
      </div>
    </div>
  );
};

export default Home;
