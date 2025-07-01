import { useState, useEffect } from "react";
import ImageLayoutSection from "../components/ImageLayoutSection";

import about1 from "../assets/about1.avif";
import about2 from "../assets/about2.avif";

import loop1 from "../assets/l1.jpg";
import loop2 from "../assets/l2.jpg";
import loop3 from "../assets/l3.jpg";
import loop4 from "../assets/l4.jpg";
import loop5 from "../assets/l5.jpg";
import loop6 from "../assets/l6.jpg";
import loop7 from "../assets/l7.jpg";
import loop8 from "../assets/l8.jpg";

import leadership from "../assets/Leadership.avif";
import headquarter from "../assets/Headquarter.avif";
import sustainability from "../assets/Sustainability.avif";

import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const images = [
    {
      url: loop1,
      alt: "Financial charts and data analysis",
    },
    {
      url: loop2,
      alt: "Business technology interface",
    },
    {
      url: loop3,
      alt: "Business professional with tablet",
    },
    {
      url: loop4,
      alt: "Digital network visualization",
    },
    {
      url: loop5,
      alt: "Business meeting and collaboration",
    },
    {
      url: loop6,
      alt: "Advanced technology interface",
    },
    {
      url: loop7,
      alt: "Modern workspace",
    },
    {
      url: loop8,
      alt: "Team collaboration",
    },
    {
      url: loop1,
      alt: "Financial charts and data analysis",
    },
    {
      url: loop2,
      alt: "Business technology interface",
    },
    {
      url: loop3,
      alt: "Business professional with tablet",
    },
    {
      url: loop4,
      alt: "Digital network visualization",
    },
    {
      url: loop5,
      alt: "Business meeting and collaboration",
    },
    {
      url: loop6,
      alt: "Advanced technology interface",
    },
    {
      url: loop7,
      alt: "Modern workspace",
    },
    {
      url: loop8,
      alt: "Team collaboration",
    },
    {
      url: loop1,
      alt: "Financial charts and data analysis",
    },
    {
      url: loop2,
      alt: "Business technology interface",
    },
    {
      url: loop3,
      alt: "Business professional with tablet",
    },
    {
      url: loop4,
      alt: "Digital network visualization",
    },
    {
      url: loop5,
      alt: "Business meeting and collaboration",
    },
    {
      url: loop6,
      alt: "Advanced technology interface",
    },
    {
      url: loop7,
      alt: "Modern workspace",
    },
    {
      url: loop8,
      alt: "Team collaboration",
    },
    {
      url: loop1,
      alt: "Financial charts and data analysis",
    },
    {
      url: loop2,
      alt: "Business technology interface",
    },
    {
      url: loop3,
      alt: "Business professional with tablet",
    },
    {
      url: loop4,
      alt: "Digital network visualization",
    },
    {
      url: loop5,
      alt: "Business meeting and collaboration",
    },
    {
      url: loop6,
      alt: "Advanced technology interface",
    },
    {
      url: loop7,
      alt: "Modern workspace",
    },
    {
      url: loop8,
      alt: "Team collaboration",
    },
    {
      url: loop1,
      alt: "Financial charts and data analysis",
    },
    {
      url: loop2,
      alt: "Business technology interface",
    },
    {
      url: loop3,
      alt: "Business professional with tablet",
    },
    {
      url: loop4,
      alt: "Digital network visualization",
    },
    {
      url: loop5,
      alt: "Business meeting and collaboration",
    },
    {
      url: loop6,
      alt: "Advanced technology interface",
    },
    {
      url: loop7,
      alt: "Modern workspace",
    },
    {
      url: loop8,
      alt: "Team collaboration",
    },
    {
      url: loop1,
      alt: "Financial charts and data analysis",
    },
    {
      url: loop2,
      alt: "Business technology interface",
    },
    {
      url: loop3,
      alt: "Business professional with tablet",
    },
    {
      url: loop4,
      alt: "Digital network visualization",
    },
    {
      url: loop5,
      alt: "Business meeting and collaboration",
    },
    {
      url: loop6,
      alt: "Advanced technology interface",
    },
    {
      url: loop7,
      alt: "Modern workspace",
    },
    {
      url: loop8,
      alt: "Team collaboration",
    },
    {
      url: loop1,
      alt: "Financial charts and data analysis",
    },
    {
      url: loop2,
      alt: "Business technology interface",
    },
    {
      url: loop3,
      alt: "Business professional with tablet",
    },
    {
      url: loop4,
      alt: "Digital network visualization",
    },
    {
      url: loop5,
      alt: "Business meeting and collaboration",
    },
    {
      url: loop6,
      alt: "Advanced technology interface",
    },
    {
      url: loop7,
      alt: "Modern workspace",
    },
    {
      url: loop8,
      alt: "Team collaboration",
    },
    {
      url: loop1,
      alt: "Financial charts and data analysis",
    },
    {
      url: loop2,
      alt: "Business technology interface",
    },
    {
      url: loop3,
      alt: "Business professional with tablet",
    },
    {
      url: loop4,
      alt: "Digital network visualization",
    },
    {
      url: loop5,
      alt: "Business meeting and collaboration",
    },
    {
      url: loop6,
      alt: "Advanced technology interface",
    },
    {
      url: loop7,
      alt: "Modern workspace",
    },
    {
      url: loop8,
      alt: "Team collaboration",
    },
    {
      url: loop1,
      alt: "Financial charts and data analysis",
    },
    {
      url: loop2,
      alt: "Business technology interface",
    },
    {
      url: loop3,
      alt: "Business professional with tablet",
    },
    {
      url: loop4,
      alt: "Digital network visualization",
    },
    {
      url: loop5,
      alt: "Business meeting and collaboration",
    },
    {
      url: loop6,
      alt: "Advanced technology interface",
    },
    {
      url: loop7,
      alt: "Modern workspace",
    },
    {
      url: loop8,
      alt: "Team collaboration",
    },
    {
      url: loop1,
      alt: "Financial charts and data analysis",
    },
    {
      url: loop2,
      alt: "Business technology interface",
    },
    {
      url: loop3,
      alt: "Business professional with tablet",
    },
    {
      url: loop4,
      alt: "Digital network visualization",
    },
    {
      url: loop5,
      alt: "Business meeting and collaboration",
    },
    {
      url: loop6,
      alt: "Advanced technology interface",
    },
    {
      url: loop7,
      alt: "Modern workspace",
    },
    {
      url: loop8,
      alt: "Team collaboration",
    },
    {
      url: loop1,
      alt: "Financial charts and data analysis",
    },
    {
      url: loop2,
      alt: "Business technology interface",
    },
    {
      url: loop3,
      alt: "Business professional with tablet",
    },
    {
      url: loop4,
      alt: "Digital network visualization",
    },
    {
      url: loop5,
      alt: "Business meeting and collaboration",
    },
    {
      url: loop6,
      alt: "Advanced technology interface",
    },
    {
      url: loop7,
      alt: "Modern workspace",
    },
    {
      url: loop8,
      alt: "Team collaboration",
    },
  ];

  const [activeTab, setActiveTab] = useState("vision");
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Image scroll animation
  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      let scrollPosition = 0;

      const scroll = () => {
        scrollPosition += 1;
        if (scrollPosition >= scrollWidth - clientWidth) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      };

      const intervalId = setInterval(scroll, 4000);
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block border border-[#D6BA73] text-[#D6BA73] bg-[#F9F3E3] rounded-full px-3 md:px-4 py-1 text-xs md:text-sm font-semibold mb-2 md:mb-4">
            ABOUT PENTACORE
          </div>

          <h1 className="font-bold text-pentacore-navy mb-4 md:mb-6 leading-tight text-3xl sm:text-4xl md:text-[46px]">
            Strategic Investments. Global Vision.
            <br className="hidden sm:block" />
            Sustainable Growth.
          </h1>
          <p className="mb-6 md:mb-10 max-w-2xl mx-auto text-base md:text-lg text-gray-600">
            Empowering Innovation. Enabling Progress.
          </p>
          <button
            className="relative inline-flex items-center bg-[#0F1F44] text-white rounded-full w-[150px] md:w-[170px] pl-3 md:pl-4 pr-10 md:pr-12 py-2 md:py-3 hover:bg-[#0c1938] transition-colors duration-200 text-sm md:text-base"
            onClick={() => navigate("/contact")}
          >
            CONTACT US
            <span className="absolute right-2 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3 md:w-4 md:h-4 text-[#0F1F44]"
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

      {/* Scrolling Images Section */}
      <div className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="max-w-full">
          <div className="scroll-container overflow-x-hidden relative">
            <div className="scroll-track flex animate-continuous-scroll">
              {/* Duplicate twice for seamless scroll */}
              {[1, 2].map((_, loopIndex) => (
                <div
                  key={`loop-${loopIndex}`}
                  className="flex gap-3 md:gap-4 flex-shrink-0 min-w-fit"
                >
                  {(() => {
                    const sections = [];
                    for (let i = 0; i < images.length; i += 3) {
                      const largeImage = images[i];
                      const smallImage1 = images[i + 1];
                      const smallImage2 = images[i + 2];
                      if (!largeImage) break;

                      sections.push(
                        <div
                          key={`section-${loopIndex}-${i}`}
                          className="flex gap-3 md:gap-4 flex-shrink-0"
                        >
                          {/* Large Image */}
                          <div className="w-64 sm:w-80 md:w-96 h-64 sm:h-72 md:h-90 rounded-xl overflow-hidden flex-shrink-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative">
                            <img
                              src={largeImage.url}
                              alt={largeImage.alt}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          {/* Small Images */}
                          {smallImage1 && smallImage2 && (
                            <div className="w-64 h-64 sm:h-72 md:h-90 flex flex-col gap-2 flex-shrink-0">
                              {[smallImage1, smallImage2].map((img, idx) => (
                                <div
                                  key={`small-${loopIndex}-${i}-${idx}`}
                                  className="flex-1 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative"
                                >
                                  <img
                                    src={img.url}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                    return sections;
                  })()}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes continuous-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-continuous-scroll {
              animation: continuous-scroll ${
                isMobile ? "260s" : "400s"
              } linear infinite;
              width: max-content;
            }

            .scroll-container {
              mask-image: linear-gradient(
                to right,
                transparent 0%,
                black 5%,
                black 95%,
                transparent 100%
              );
              -webkit-mask-image: linear-gradient(
                to right,
                transparent 0%,
                black 5%,
                black 95%,
                transparent 100%
              );
            }

            .h-31 {
              height: 9.5rem;
            }

            .scroll-container:hover .animate-continuous-scroll {
              animation-play-state: paused;
            }
          `}
        </style>
      </div>

      {/* Who We Are Section */}
      <div className="bg-gray-50 py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden order-1 md:order-none">
              <img
                src={about1}
                alt="Modern city skyline representing global reach"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            <div className="order-2 md:order-none">
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold leading-tight md:leading-[54.4px] text-[rgb(13,13,57)] mb-4 md:mb-6">
                Who we are
              </h2>

              <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8 text-justify">
                Pentacore Holdings is a strategic investment platform committed
                to driving growth across industries shaping the future.
                Headquartered in Dubai International Financial Centre (DIFC), we
                leverage the UAE's business-friendly ecosystem and regional
                leadership to build a resilient, diversified portfolio. Our
                focus areas include innovation-driven sectors such as
                technology, healthcare, renewable energy and emerging
                industries. In addition to investments, Pentacore also offers
                headquarter services, treasury management, and financial
                solutions for its group companies.
              </p>

              <div className="flex space-x-4 md:space-x-8 mb-6 md:mb-8 overflow-x-auto pb-2">
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`pb-2 text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap transition-colors duration-300 ${
                    activeTab === "vision"
                      ? "text-[rgb(13,13,57)] border-b-2 border-[rgb(13,13,57)]"
                      : "text-gray-500 hover:text-[rgb(13,13,57)]"
                  }`}
                >
                  Our Vision
                </button>
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`pb-2 text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap transition-colors duration-300 ${
                    activeTab === "mission"
                      ? "text-[rgb(13,13,57)] border-b-2 border-[rgb(13,13,57)]"
                      : "text-gray-500 hover:text-[rgb(13,13,57)]"
                  }`}
                >
                  Our Mission
                </button>
              </div>

              <div className="text-gray-600 leading-relaxed">
                {activeTab === "vision" ? (
                  <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8 text-justify">
                    To be the leading investment holding company in the region,
                    known for innovative strategies, sustainable growth, and
                    excellence.
                  </p>
                ) : (
                  <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8 text-justify">
                    To create long-term value through strategic investments and
                    partnerships, while fostering innovation and contributing to
                    sustainable economic development.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Advantage Section */}
      <div className="py-12 md:py-20 px-4 sm:px-6 bg-gray-50 my-8 sm:my-12 md:my-20 rounded-xl md:rounded-[20px]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-none">
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-semibold leading-tight md:leading-[64.6px] text-[#0D0D39] mb-4 md:mb-6">
                Location Advantage
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 text-justify">
                Operating from Dubai International Financial Centre (DIFC),
                Pentacore Holdings benefits from world-class regulatory,
                financial, and business infrastructure — positioning us to
                capture opportunities across the UAE, MENA region, and global
                markets.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden order-1 md:order-none">
              <img
                src={about2}
                alt="Dubai financial district skyline"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Leadership */}
            <div className="bg-gray-50 p-4 md:p-6 rounded-xl text-left">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6 overflow-hidden bg-pentacore-gold">
                <img
                  src={leadership}
                  alt="Leadership"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#0D0D39] mb-2 md:mb-4">
                Leadership
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Guided by Experience. Driven by Vision. Pentacore Holdings is
                led by a team of accomplished professionals with deep expertise
                across investments, technology, operations, and business
                management. Our leadership team brings a proven track record of
                excellence to build value and manage growth across diverse
                sectors.
              </p>
            </div>

            {/* Headquarter & Treasury Services */}
            <div className="bg-gray-50 p-4 md:p-6 rounded-xl text-left">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6 overflow-hidden bg-pentacore-gold">
                <img
                  src={headquarter}
                  alt="Headquarter & Treasury Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#0D0D39] mb-2 md:mb-4">
                Headquarter & Treasury Services
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                In addition to investments, Pentacore Holdings provides
                centralized headquarter services and comprehensive treasury and
                financial management solutions with dedicated oversight for its
                group companies, ensuring greater efficiency, governance
                alignment, and operational synergy across its portfolio.
              </p>
            </div>

            {/* Sustainability & Responsibility */}
            <div className="bg-gray-50 p-4 md:p-6 rounded-xl text-left">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6 overflow-hidden bg-pentacore-gold">
                <img
                  src={sustainability}
                  alt="Sustainability & Responsibility"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#0D0D39] mb-2 md:mb-4">
                Sustainability & Responsibility
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                We are committed to responsible and ethical business practices.
                Across all sectors and regions, we prioritize sustainable and
                profitable growth, strong governance, and long-term value
                creation — contributing to broader economic development while
                respecting natural and global sustainability goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
