import { Facebook, Instagram, Twitter, X } from "lucide-react";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#5F7ADB] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">Sakha</h1>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <Link to="problem">
              <li className="hover:text-blue-200 transition-colors cursor-pointer">
                Problem
              </li>
            </Link>
           <Link to="solution"> <li className="hover:text-blue-200 transition-colors cursor-pointer">
              Solution
            </li></Link>
            <li className="hover:text-blue-200 transition-colors cursor-pointer">
              Join Us
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <Instagram className="w-6 h-6 hover:text-blue-200 transition-colors cursor-pointer" />
            <Facebook className="w-6 h-6 hover:text-blue-200 transition-colors cursor-pointer" />
            <Twitter className="w-6 h-6 hover:text-blue-200 transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
