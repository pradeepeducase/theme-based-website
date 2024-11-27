"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="main-header">
      {/* Top Header */}
      <div className="bg-red-500 py-2 px-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Section */}
          <div className="flex space-x-4 text-white text-sm">
            <a href="tel:+919876543210" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhoneSquare} className="mr-2" />
              <span>9876543210</span>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+918209997899" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhoneSquare} className="mr-2" />
              <span>8209997899</span>
            </a>
            <a href="mailto:alokfranchise22@gmail.com" className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span>alokfranchise22@gmail.com</span>
            </a>
          </div>

          {/* Right Section */}
          <div>
            <a href="/login" className="text-white text-sm flex items-center space-x-2">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
              <span>Login</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4 px-2 border-b">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <img
                src="https://media.jisethji.com/educase-india/2024/franchise-logo/logo-1724649518.png"
                alt="Logo"
                className="w-32"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-red-500">
              Home
            </Link>
            <div className="group relative">
              <Link href="/about" className="text-gray-700 hover:text-red-500">
                About
              </Link>
              <ul className="absolute hidden group-hover:block bg-red-500 text-white space-y-1 py-2 px-4 shadow-lg">
                <li>
                  <Link href="/about" className="hover:text-gray-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/our-team" className="hover:text-gray-200">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/parent-corner" className="hover:text-gray-200">
                    Parent Corner
                  </Link>
                </li>
              </ul>
            </div>
            <div className="group relative">
              <Link href="/programs" className="text-gray-700 hover:text-red-500">
                Our Programs
              </Link>
              <ul className="absolute hidden group-hover:block bg-red-500 text-white space-y-1 py-2 px-4 shadow-lg">
                <li>
                  <Link href="/programs#10" className="hover:text-gray-200">
                    Nursery
                  </Link>
                </li>
                <li>
                  <Link href="/programs#9" className="hover:text-gray-200">
                    Day Care
                  </Link>
                </li>
                <li>
                  <Link href="/programs#22" className="hover:text-gray-200">
                    Play Group
                  </Link>
                </li>
                <li>
                  <Link href="/programs#20" className="hover:text-gray-200">
                    Junior KG
                  </Link>
                </li>
                <li>
                  <Link href="/programs#21" className="hover:text-gray-200">
                    Senior KG
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="/ourCenters" className="text-gray-700 hover:text-red-500">
              Our Centers
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-red-500">
              Gallery
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-red-500">
              Our News
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-500">
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-3">
            <a
              href="#"
              className="bg-yellow-500 text-white w-8 h-8 flex items-center justify-center rounded-full"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com"
              className="bg-pink-500 text-white w-8 h-8 flex items-center justify-center rounded-full"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
