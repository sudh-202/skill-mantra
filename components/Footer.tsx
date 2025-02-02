"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { footerData, Coursesdata } from '../constants';
import Image from 'next/image';
import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im'; // Importing a spinner icon
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    if (!email) {
      setStatusMessage('Please enter a valid email address.');
      setIsLoading(false); // Stop loading
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage('Subscription successful!');
        setEmail(''); // Clear the input field
      } else {
        setStatusMessage(data.message || 'Subscription failed.');
      }
    } catch (error) {
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <footer className="bg-[#c2cee8] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
        {/* Logo and Sign-Up Form */}
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <Image
            src="/logo.webp"
            alt="Skill Mantra Logo"
            className="md:w-[20vw] w-[70vw]"
            width={100}
            height={100}
          />
          <p className="text-center sm:text-left text-black">
            Stay in the loop and sign up for <br />
            Skill Mantra:
          </p>
          <form className="flex w-full sm:w-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading} // Disable input when loading
            />
            <button
              type="submit"
              className="bg-[#20014b] hover:bg-blue-600 text-white px-4 py-2 rounded-r-md flex items-center justify-center"
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? (
                <ImSpinner2 className="animate-spin" /> // Loading spinner
              ) : (
                <FaArrowRight />
              )}
            </button>
          </form>
          {statusMessage && (
            <p className="text-center sm:text-left text-green-500 mt-2">
              {statusMessage}
            </p>
          )}

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/skillmantra0123"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/skillmantra_?igsh=Mml6Nm9wYngzdzJm"
              className="text-pink-500 hover:text-pink-700"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/84960671/admin/dashboard/"
              className="text-blue-700 hover:text-blue-900"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        {footerData.map((section) => (
          <div
            key={section.title}
            className="relative flex flex-col items-center justify-center space-y-2"
          >
            <h2 className="md:text-[1.8vw] text-[6vw] font-semibold text-center text-black">
              {section.title}
            </h2>
            {section.title === 'Courses' ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-gray-900 text-center">
                  {section.title}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="absolute left-0 z-50 bg-white">
                  <DropdownMenuSeparator />
                  {Coursesdata.map((course) => (
                    <DropdownMenuItem key={course.slug}>
                      <Link
                        href={`/course/${course.slug}`}
                        className="text-black block px-4 py-2 hover:bg-gray-100"
                      >
                        {course.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <ul className="space-y-1 flex items-center justify-center flex-col md:px-0 px-16 text-center">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-gray-700 hover:text-gray-900"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
