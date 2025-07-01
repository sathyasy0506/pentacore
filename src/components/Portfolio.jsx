import React from "react";
import leadershipIcon from "../assets/Idea.svg";
import missionIcon from "../assets/Targetxs.svg";
import { useNavigate } from "react-router-dom";

const OurWorkSection = () => {
  const navigate = useNavigate();

  const Card = ({ title, description, icon }) => (
    <div className="relative inline-block font-montserrat w-full sm:w-[320px] md:w-[360px] lg:w-[380px]">
      {/* Icon */}
      <div className="absolute -top-[75px] sm:-top-[85px] md:-top-[90px] left-1/2 transform -translate-x-1/2 w-[120px] sm:w-[140px] md:w-[160px] h-[120px] sm:h-[140px] md:h-[160px] bg-white rounded-full flex items-center justify-center z-30 border-[10px] sm:border-[14px] md:border-[16px] border-[#001f3f] shadow-lg">
        <img
          src={icon}
          alt="Icon"
          className="p-4 sm:p-5 w-[80%] h-[80%] object-contain"
        />
      </div>

      {/* Card */}
      <div className="bg-[#001f3f] rounded-t-[80px] sm:rounded-t-[100px] md:rounded-t-[120px] rounded-b-[50px] sm:rounded-b-[60px] md:rounded-b-[66px] overflow-hidden relative pb-6 shadow-2xl h-[400px] sm:h-[430px] md:h-[460px]">
        <div
          className="bg-white text-gray-800 h-[330px] sm:h-[360px] md:h-[390px] px-6 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-10 rounded-t-[20px] relative z-20 overflow-hidden flex justify-center items-center text-center"
          style={{
            borderBottomLeftRadius: "180px 70px",
            borderBottomRightRadius: "180px 70px",
          }}
        >
          <p className="text-[14px] font-normal leading-[23.8px] text-[#6d6d73]">
            {description}
          </p>
        </div>

        <div className="absolute bottom-0 w-full h-[70px] flex items-center justify-center text-white z-10 text-base leading-tight">
          <h1 className="text-[20px] sm:text-[22px] font-normal leading-normal mt-4">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );

  return (
    <div className=" py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Side - Philosophy Text */}
          <div className="col-span-1">
            <div className="mb-6">
              <div className="inline-block border border-[#D6BA73] text-[#D6BA73] bg-[#F9F3E3] rounded-full px-4 py-1 text-sm font-semibold mb-2">
                OUR WORK
              </div>
            </div>
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-[49px] font-[500] leading-[1.3] md:leading-[63.7px] text-[#15254C]">
              Our Philosophy
            </h2>
            <p className="text-[16px] font-normal leading-[25.44px] text-[#6d6d73] mb-6 md:mb-8">
              We are guided by our founder's simple yet highly effective
              philosophy of satisfying and exceeding the expectations of our
              customers, both small or big, through service excellence, honesty,
              integrity, and social awareness. This principle has become
              ingrained in all aspects of the business and is truly responsible
              for the group's unrivalled success.
            </p>

            <button
              className="relative inline-flex items-center bg-[#0F1F44] text-white rounded-full w-[150px] sm:w-[170px] pl-4 pr-10 sm:pr-12 py-2 sm:py-3 hover:bg-[#0c1938] transition-colors duration-200 text-sm sm:text-base"
              onClick={() => navigate("/contact")}
            >
              Contact Us
              <span className="absolute right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F1F44]"
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

          {/* Right Side - Vision and Mission Cards */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-10 mt-10 sm:mt-0">
            <div className="w-full sm:w-auto">
              <Card
                title="OUR VISION"
                description="To be the leading investment holding company in the region, known for innovative strategies, sustainable growth, and excellence."
                icon={leadershipIcon}
              />
            </div>
            <div className="w-full sm:w-auto mt-20 sm:mt-0">
              <Card
                title="OUR MISSION"
                description="To create long-term value for stakeholders through prudent investments, strategic management, and a diversified portfolio — governed by the highest standards of transparency and integrity."
                icon={missionIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkSection;
