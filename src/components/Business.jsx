import React from "react";
import image1 from "../assets/section1.1.jpg";
import image2 from "../assets/l7.jpg";
import image3 from "../assets/section2.1.jpg";
import image4 from "../assets/section2.2.jpg";
import image5 from "../assets/section3.1.jpg";
import image6 from "../assets/section3.2.jpg";

const Business = () => {
  return (
    <div className="bg-gray-50 rounded-[20px] md:rounded-[30px] overflow-hidden mx-4 my-8 md:m-14">
      {/* Header Section */}
      <div className="text-center pt-8 pb-12 md:pt-16 md:pb-20 px-4">
        <div className="inline-block border border-[#D6BA73] text-[#D6BA73] bg-[#F9F3E3] rounded-full px-4 py-1 text-xs md:text-sm font-semibold mb-2">
          OUR SERVICES
        </div>

        <h2 className="text-[#0F1F44] font-semibold text-3xl sm:text-4xl md:text-[52px] leading-tight md:leading-[52px]">
          Business Sectors
        </h2>
      </div>

      {/* SECTION 1 - Images Left, Content Right */}
      <div className="flex flex-col lg:flex-row p-2 md:p-4 items-stretch">
        {/* Left Image Section */}
        <div className="w-full lg:flex-1 lg:min-w-[300px] lg:max-w-[700px] overflow-hidden">
          <div className="flex h-[300px] sm:h-[400px] md:h-[500px] gap-2 md:gap-4 transition-all duration-500 ease-in-out group">
            <div className="flex-[7] group-hover:flex-[3] overflow-hidden rounded-[10px] md:rounded-[20px] transition-all duration-500 ease-in-out h-full">
              <img
                src={image1}
                alt="Technology Research"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="flex-[3] group-hover:flex-[7] overflow-hidden rounded-[10px] md:rounded-[20px] transition-all duration-500 ease-in-out h-full">
              <img
                src={image2}
                alt="Innovation Lab"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:flex-1 lg:min-w-[300px] px-4 md:px-6 lg:pl-8 lg:pr-0 pt-6 md:pt-8 lg:pt-0 flex flex-col justify-center">
          <h3 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0F1F44] mb-3 md:mb-4">
            QuinTech Centre for Applied Sciences Global (QCAS Global) Limited
          </h3>

          <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-3 md:mb-4 pl-4">
            <span className="block font-semibold mb-1">
              Driving Innovation Through Applied Technology Research
            </span>
            QCAS is the dedicated research and development arm of Pentacore
            Holdings, focused on advancing frontier technologies that shape the
            future of industry.
          </p>

          <div className="text-[#555] text-sm sm:text-base leading-relaxed mb-3 md:mb-4 pl-6">
            <p className="font-semibold mb-2">Specializing in:</p>
            <ul className="list-disc list-outside space-y-2 text-base">
              <li>
                <strong>Technology Research & Development</strong> – Applied R&D
                across artificial intelligence, automation, data science, and
                smart systems — tailored for practical implementation and
                commercial scalability.
              </li>
            </ul>
          </div>

          <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-3 md:mb-4 pl-4">
            QCAS serves as an innovation catalyst, bridging scientific inquiry
            with real-world application. With a mandate to create high-impact,
            sustainable solutions, QCAS accelerates the development of
            proprietary technologies that power the next generation of
            Pentacore’s portfolio companies.
          </p>

          <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-4 md:mb-6 pl-4">
            Supported by strategic oversight and funding through Pentacore, QCAS
            is where bold ideas become transformative technologies.
          </p>

          <a
            href="https://qcas.global/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative inline-flex items-center bg-[#0F1F44] text-white rounded-full w-[150px] sm:w-[170px] pl-4 pr-10 sm:pr-12 py-2 sm:py-3 hover:bg-[#0c1938] transition-colors duration-200">
              Visit website
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
          </a>
        </div>
      </div>

      {/* SECTION 2 - Content Left, Images Right */}
      <div className="flex flex-col lg:flex-row-reverse p-4 md:p-8 items-stretch border-t border-dotted border-[#D6BA73]">
        {/* Right Image Section */}
        <div className="w-full lg:flex-1 lg:min-w-[300px] lg:max-w-[700px] overflow-hidden">
          <div className="flex h-[300px] sm:h-[400px] md:h-[500px] gap-2 md:gap-4 transition-all duration-500 ease-in-out group">
            <div className="flex-[7] group-hover:flex-[3] overflow-hidden rounded-[10px] md:rounded-[20px] transition-all duration-500 ease-in-out h-full">
              <img
                src={image3}
                alt="Business Technology"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="flex-[3] group-hover:flex-[7] overflow-hidden rounded-[10px] md:rounded-[20px] transition-all duration-500 ease-in-out h-full">
              <img
                src={image4}
                alt="Digital Innovation"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>

        {/* Left Content Section */}
        <div className="w-full lg:flex-1 lg:min-w-[300px] px-4 md:px-6 lg:pr-8 lg:pl-0 pt-6 md:pt-8 lg:pt-0 flex flex-col justify-center">
          <h3 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0F1F44] mb-3 md:mb-4">
            Cincobit Technology Solutions Limited
          </h3>

          <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-3 md:mb-4 pl-4">
            <span className="block font-semibold mb-1">
              Empowering Digital Resilience
            </span>
            Cincobit is a dynamic technology company delivering specialized IT
            consulting and digital infrastructure solutions to support
            enterprise growth in an increasingly connected world.
          </p>

          <div className="text-[#555] text-sm sm:text-base leading-relaxed mb-3 md:mb-4 pl-6">
            <p className="font-semibold mb-2">With core expertise in:</p>
            <ul className="list-disc list-outside space-y-2 text-base">
              <li>
                <strong>Information Technology Consulting</strong> – End-to-end
                digital transformation strategy, IT systems design, and
                enterprise architecture.
              </li>
              <li>
                <strong>Cybersecurity Consulting</strong> – Threat analysis,
                risk management, and robust security frameworks to safeguard
                digital assets.
              </li>
              <li>
                <strong>Internet Consultancy</strong> – Infrastructure planning,
                cloud integration, and platform optimization for scalable web
                environments.
              </li>
              <li>
                <strong>Software Development (Software House)</strong> – Agile
                development of custom applications, enterprise software, and
                innovative digital tools.
              </li>
            </ul>
          </div>

          <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-4 md:mb-6 pl-4">
            Cincobit bridges strategic insight with technical precision –
            ensuring secure, scalable, and future-ready digital ecosystems. As a
            Pentacore subsidiary, it benefits from strong governance, financial
            backing, and strategic direction to drive innovation and regional
            impact.
          </p>

          <a
            href="https://cincobit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative inline-flex items-center bg-[#0F1F44] text-white rounded-full w-[150px] sm:w-[170px] pl-4 pr-10 sm:pr-12 py-2 sm:py-3 hover:bg-[#0c1938] transition-colors duration-200">
              Visit website
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
          </a>
        </div>
      </div>

      {/* SECTION 3 - Images Left, Content Right */}
      <div className="flex flex-col lg:flex-row p-4 md:p-8 items-stretch border-t border-dashed border-[#D6BA73]">
        {/* Left Image Section */}
        <div className="w-full lg:flex-1 lg:min-w-[300px] lg:max-w-[700px] overflow-hidden">
          <div className="flex h-[300px] sm:h-[400px] md:h-[500px] gap-2 md:gap-4 transition-all duration-500 ease-in-out group">
            <div className="flex-[7] group-hover:flex-[3] overflow-hidden rounded-[10px] md:rounded-[20px] transition-all duration-500 ease-in-out h-full">
              <img
                src={image5}
                alt="Technology Research"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="flex-[3] group-hover:flex-[7] overflow-hidden rounded-[10px] md:rounded-[20px] transition-all duration-500 ease-in-out h-full">
              <img
                src={image6}
                alt="Innovation Lab"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:flex-1 lg:min-w-[300px] px-4 md:px-6 lg:pl-8 lg:pr-0 pt-6 md:pt-8 lg:pt-0 flex flex-col justify-center">
          <h3 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0F1F44] mb-3 md:mb-4">
            Venta Distribution Global FZCO
          </h3>

          <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-3 md:mb-4 pl-4">
            <span className="block font-semibold mb-1">
              Enabling Sustainable Trade Across Food, Packaging & Recycling
              Industries
            </span>
            Venta Distribution Global is a diversified trading company operating
            at the intersection of food technology, consumer goods, and circular
            economy solutions.
          </p>

          <div className="text-[#555] text-sm sm:text-base leading-relaxed mb-3 md:mb-4 pl-6">
            <p className="font-semibold mb-2">Core areas of focus include:</p>
            <ul className="list-disc list-outside space-y-2 text-base">
              <li>
                <strong>Food & Beverage Processing Machinery Trading</strong> –
                Supplying advanced equipment to support industrial-scale food
                production and processing.
              </li>
              <li>
                <strong>
                  Packing & Packaging Materials & Equipment Trading
                </strong>{" "}
                – Delivering innovative and sustainable packaging solutions
                tailored to evolving industry needs.
              </li>
              <li>
                <strong>Beverages Trading</strong> – Global distribution of
                high-quality beverages, catering to retail and hospitality
                sectors.
              </li>
              <li>
                <strong>Flavors & Fragrances Trading</strong> – Sourcing and
                supplying premium-grade ingredients for the food, beverage, and
                personal care industries.
              </li>
              <li>
                <strong>Recyclables & Scrap Trading (International)</strong> –
                Facilitating the responsible trade of metal and non-metal waste,
                contributing to global recycling efforts and resource recovery.
              </li>
            </ul>
          </div>

          <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-4 md:mb-6 pl-4">
            Venta’s operations are guided by efficiency, quality, and
            environmental responsibility – supporting Pentacore’s broader
            commitment to sustainable enterprise and regional economic
            development.
          </p>

          <a
            href="http://ventauae.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative inline-flex items-center bg-[#0F1F44] text-white rounded-full w-[150px] sm:w-[170px] pl-4 pr-10 sm:pr-12 py-2 sm:py-3 hover:bg-[#0c1938] transition-colors duration-200">
              Visit website
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Business;
