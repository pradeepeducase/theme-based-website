"use client";

import React from "react";
import Link from "next/link";

const NavigationMenu = () => {
  return (
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
      <Link href="/programs" className="text-gray-700 hover:text-red-500">
        Our Programs
      </Link>
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
  );
};

export default NavigationMenu;
