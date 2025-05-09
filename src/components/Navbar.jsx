import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleCloseMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const menuItems = [
    { name: "Problem", to: "problem" },
    { name: "Solution", to: "solution" },
    { name: "Join Us", to: "" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      handleCloseMenu();
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#3B4FD8] to-[#5B42D8] text-white shadow-lg py-3"
          : "bg-gradient-to-r from-[#5F7ADB] to-[#6E62D8] text-white py-4"
      }`}
    >
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-wider cursor-pointer relative group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                SAKHA
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-10">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => item.to && scrollToSection(item.to)}
                    className="relative text-lg font-medium group"
                  >
                    <span className="transition-colors duration-300 group-hover:text-blue-200">
                      {item.name}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-200 hover:bg-[#4F6AC9] transition-colors duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transform transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transform transition-transform duration-200 rotate-0" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide Down Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100 mt-2"
              : "max-h-0 opacity-0 mt-0 pointer-events-none"
          }`}
        >
          <div className="bg-[#4F6AC9]/80 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            <ul className="flex flex-col space-y-1 p-3">
              {menuItems.map((item, index) => (
                <li key={index} className="transform transition-transform duration-200 hover:translate-x-1">
                  <button
                    onClick={() => item.to && scrollToSection(item.to)}
                    className="w-full text-left block text-lg font-medium px-4 py-3 rounded-md hover:bg-[#3B4FD8]/50 transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;