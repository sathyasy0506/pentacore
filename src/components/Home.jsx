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
      {/* ... (rest of your code remains unchanged) ... */}

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
