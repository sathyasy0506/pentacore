import React, { useState } from "react";
import l6 from "../assets/section3.1.jpg";
import l8 from "../assets/l8.jpg";
import lock from "../assets/lock.jpg";
import robo from "../assets/robo.jpg";
import { useNavigate } from "react-router-dom";

const cardsData = [
  {
    id: "card1",
    title: ["QUINTECH"],
    image: robo,
  },
  {
    id: "card2",
    title: ["CINCOBIT", "TECHNOLOGY"],
    image: lock,
  },
  {
    id: "card3",
    title: ["VENTA", "DISTRIBUTION"],
    image: l6,
  },
  {
    id: "card4",
    title: ["OTHERGIC", "STRATEGIC", "INVESTMENTS"],
    image: l8,
  },
];

const cardWidthDefault = 300;
const cardWidthShrink = 240;
const cardWidthExpand = 480;
const cardHeight = 500;

export default function RotatedCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="bg-[#003B7A] p-10 flex flex-col items-center">
      {/* Section Title */}
      <div className="inline-block border border-[#D6BA73] text-[#D6BA73] bg-[#314067] rounded-full px-4 py-1 text-sm font-semibold mb-6">
        OUR WORK
      </div>

      {/* Section Subtitle */}
      <div className="text-white text-[50px] font-medium leading-[55px] mb-8">
        BUSINESS SECTORS
      </div>

      {/* Cards Container */}
      <div
        className="flex justify-center items-stretch space-x-0"
        style={{
          maxWidth: "100%",
          overflowX: "auto",
          padding: "10px",
          transition: "all 0.8s ease-in-out",
        }}
      >
        {cardsData.map(({ id, title, image }, i) => {
          let flexBasis = cardWidthDefault;
          let zIndex = 1;
          if (hoveredIndex !== null) {
            flexBasis = hoveredIndex === i ? cardWidthExpand : cardWidthShrink;
            if (hoveredIndex === i) zIndex = 3;
          }

          return (
            <div
              key={id}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate("/services")}
              className="relative cursor-pointer shadow-md min-w-[260px]"
              style={{
                flex: `0 0 ${flexBasis}px`,
                height: cardHeight,
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                boxShadow:
                  hoveredIndex === i
                    ? "rgba(0, 0, 0, 0.15) 0px 6px 12px"
                    : "rgba(0, 0, 0, 0.1) 0px 4px 6px",
                transform: "none",
                transition: "all 0.8s ease",
                zIndex,
                overflow: "visible",
                fontFamily: "'Monestrate', sans-serif",
                color: "#fff",
              }}
            >
              {/* Background Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(38, 38, 40, 0.38)",
                  zIndex: 1,
                  pointerEvents: "none",
                  borderRadius: "inherit",
                }}
              />

              {/* Overlay Dim for Non-Hovered Cards */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(69, 69, 69, 0.44)",
                  zIndex: 2,
                  transition: "opacity 0.8s ease",
                  borderRadius: "inherit",
                  pointerEvents: "none",
                  opacity: hoveredIndex !== null && hoveredIndex !== i ? 1 : 0,
                }}
              />

              {/* Title */}
              <p
                className="select-none"
                style={{
                  fontFamily: "'Monestrate', sans-serif",
                  fontSize: "40px",
                  fontWeight: 500,
                  lineHeight: "44px",
                  color: "rgb(255, 255, 255)",
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                  transition:
                    "transform 0.8s ease, top 0.8s ease, bottom 0.8s ease, left 1s ease",
                  transformOrigin: "top left",
                  transform:
                    hoveredIndex === i ? "rotate(0deg)" : "rotate(-90deg)",
                  top: hoveredIndex === i ? "auto" : "calc(100% - 20px)",
                  bottom: hoveredIndex === i ? "56px" : "auto",
                  left: hoveredIndex === i ? "16px" : "0",
                  paddingTop: hoveredIndex === i ? 0 : "20px",
                  paddingLeft: hoveredIndex === i ? 0 : "10px",
                  zIndex: 3,
                }}
              >
                {title.map((line, idx) => (
                  <span key={idx}>{line}</span>
                ))}
              </p>

              {/* Visit Site Button */}
              <button
                className="absolute bottom-4 left-4 bg-white bg-opacity-80 hover:bg-amber-400 hover:text-black rounded-full px-4 py-2 transition-all duration-2000 ease-in-out"
                style={{
                  fontFamily: "'Monestrate', sans-serif",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "21.6px",
                  color: "rgb(21, 37, 76)",
                  opacity: hoveredIndex === i ? 1 : 0,
                  transform:
                    hoveredIndex === i ? "translateY(0)" : "translateY(10px)",
                  pointerEvents: hoveredIndex === i ? "auto" : "none",
                  zIndex: 3,
                }}
                tabIndex={-1}
              >
                Visit Site
              </button>
            </div>
          );
        })}
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="flex: 0 0"] {
            flex: 1 1 100% !important;
            max-width: 100% !important;
            min-width: auto !important;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px !important;
            transform: none !important;
            z-index: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
