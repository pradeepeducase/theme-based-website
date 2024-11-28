"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
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
  );
};

export default SocialIcons;
