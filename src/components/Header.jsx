import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import pentacore from "../assets/pentacore.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "HOME", path: "/" },
    { name: "BUISNESS", path: "/services" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    // { name: "Portfolio", path: "/portfolio" },
  ];

  const isActive = (path) => {
    if (path === "/" && (location.pathname === "/" || location.pathname === "/home")) {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <header className="bg-white fixed  left-0 w-full z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src={pentacore} alt="Pentacore Logo" className="h-14 w-auto" />
          </Link>

       {/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-6">
  {navigation.map((item) => (
    item.name === "CONTACT" ? (
      <Link
        key={item.path}
        to={item.path}
        className="bg-[#0F1F44] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0c1938] transition flex items-center gap-2 group"
      >
        CONTACT US
        <svg
          className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    ) : (
      <Link
        key={item.path}
        to={item.path}
        className={`text-[16px] font-medium px-3 py-2 transition ${
          isActive(item.path)
            ? "text-[#0F1F44] border-b-2 border-[#0F1F44]"
            : "text-[#0F1F44] hover:text-blue-700"
        }`}
      >
        {item.name}
      </Link>
    )
  ))}
</nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#0F1F44] focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-lg shadow border border-gray-100">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) =>
                item.name === "Contact" ? (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center bg-[#0F1F44] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0c1938] transition"
                  >
                    CONTACT US
                  </Link>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-[15px] font-medium transition ${
                      isActive(item.path)
                        ? "text-[#0F1F44] bg-gray-100"
                        : "text-[#0F1F44] hover:bg-gray-50 hover:text-blue-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
