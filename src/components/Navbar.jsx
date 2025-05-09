import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#5F7ADB] text-white shadow-lg fixed w-full top-0">
      <div className=" mx-auto px-10 ">
        <div className="flex items-center justify-between h-18">
          <h1 className="text-2xl font-bold tracking-wider hover:text-blue-200 transition-colors cursor-pointer">
            SAKHA
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <Link to="problem"><li className="text-lg font-medium hover:text-blue-200 transition-colors cursor-pointer">
                Problem
              </li></Link>
              <Link to="solution"><li className="text-lg font-medium hover:text-blue-200 transition-colors cursor-pointer">
                Solution
              </li></Link>
              <li className="text-lg font-medium hover:text-blue-200 transition-colors cursor-pointer">
                Join Us
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-200 hover:bg-[#4F6AC9] transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <ul className="flex flex-col space-y-3">
                <li className="text-lg font-medium hover:text-blue-200 transition-colors cursor-pointer px-3 py-2 rounded-md hover:bg-[#4F6AC9]">
                  Problem
                </li>
                <li className="text-lg font-medium hover:text-blue-200 transition-colors cursor-pointer px-3 py-2 rounded-md hover:bg-[#4F6AC9]">
                  Solution
                </li>
                <li className="text-lg font-medium hover:text-blue-200 transition-colors cursor-pointer px-3 py-2 rounded-md hover:bg-[#4F6AC9]">
                  Join Us
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;