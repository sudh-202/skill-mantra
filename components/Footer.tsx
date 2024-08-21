import React from 'react';
import { footerData } from '../constants';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center space-y-8 sm:space-y-0">
        {/* Logo and Sign-Up Form */}
        <div className="flex flex-col items-center sm:items-start space-y-4 w-full sm:w-auto sm:mr-16">
          <Image src="/logo.webp" alt="Skill Mantra Logo" className="w-[20vw] sm:w-[15vw]" width={100} height={100} />
          <p className="text-center sm:text-left">Stay in the loop and sign up for the Skill Mantra:</p>
          <form className="flex w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-90 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
            >
              <FaArrowRight />
            </button>
          </form>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between w-full sm:w-auto space-y-8 sm:space-y-0 sm:space-x-12">
          {footerData.map((section) => (
            <div key={section.title} className="flex flex-col items-center sm:items-start space-y-2">
              <h2 className="text-[1.8vw] font-semibold text-center sm:text-left">{section.title}</h2>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-800">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
