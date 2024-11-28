"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
