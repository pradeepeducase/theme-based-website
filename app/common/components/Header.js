"use client";

import React from "react";
import Link from "next/link";
import ContactInfo from "./ContactInfo";
import SocialIcons from "./SocialIcons";
import NavigationMenu from "./NavigationMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="main-header">
      {/* Top Header */}
      <div className="bg-red-500 py-2 px-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Contact Info */}
          <ContactInfo />
          {/* Login Link */}
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
          <NavigationMenu />
          {/* Social Icons */}
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Header;
