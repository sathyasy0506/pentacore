import React from "react";
import { useNavigate } from "react-router-dom";
import l6 from "../assets/l6.jpg";
import l8 from "../assets/l8.jpg";
import lock from "../assets/lock.jpg";
import robo from "../assets/robo.jpg";

const cardData = [
  {
    id: 1,
    title: ["FINTECH"],
    image: l6,
  },
  {
    id: 2,
    title: ["CINCOBIT", "TECHNOLOGY"],
    image: l8,
  },
  {
    id: 3,
    title: ["VENTA", "DISTRIBUTION"],
    image: lock,
  },
  {
    id: 4,
    title: ["OTHERGIC", "STRATEGIC", "INVESTMENTS"],
    image: robo,
  },
];

export default function RotatedCards() {
  const navigate = useNavigate();

  return (
    <div className="py-10 flex flex-col items-center bg-[#003B7A] px-4">
      {/* Section Title */}
      <div className="inline-block border border-[#D6BA73] text-[#D6BA73] bg-[#314067] rounded-full px-4 py-1 text-sm font-semibold mb-4 sm:mb-6">
        OUR WORK
      </div>

      {/* Section Subtitle */}
      <div className="text-white text-[32px] sm:text-[40px] md:text-[50px] font-medium leading-tight text-center mb-8">
        BUSINESS SECTORS
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center">
        {cardData.map((card) => (
          <div
            key={card.id}
            onClick={() => navigate("/services")}
            className="relative w-[90vw] sm:w-[250px] md:w-[280px] lg:w-[300px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] m-0 shadow-md bg-cover bg-center bg-no-repeat overflow-visible cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-lg"
            style={{
              backgroundImage: `linear-gradient(rgba(85, 85, 124, 0.21), rgba(85, 85, 124, 0.21)), url(${card.image})`,
            }}
          >
            <div className="absolute pt-7 left-0 top-[calc(100%-20px)] transform -rotate-90 origin-top-left text-white font-medium text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight flex flex-col gap-1 pointer-events-none whitespace-nowrap drop-shadow-md z-10">
              {card.title.map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
