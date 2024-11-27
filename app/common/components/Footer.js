"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-red-600 text-white">
        {/* Animated Icons */}
        <div className="anim-icons">
            <span className="icon icon-sparrow wow zoomIn" data-wow-delay="400ms"></span>
            <span className="icon icon-rainbow-2 wow zoomIn zoom-fade" data-wow-delay="800ms"></span>
            <span className="icon icon-star-3"></span>
            <span className="icon icon-star-3 two"></span>
        </div>

        {/* Scroll to Top Button */}
        <div className="scroll-to-top z-10" data-target="html">
            <span className="icon icon-arrow-up" style={{ scrollBehavior: 'smooth' }}></span>
        </div>

        {/* Footer Upper Section */}
        <div className="footer-upper px-2 py-12">
            <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Footer Column 1: Contact */}
                <div className="footer-column">
                <h4 className="text-xl font-semibold">Contact</h4>
                <ul className="mt-4">
                    <li>
                    <a href="tel:+91 9876543210" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faPhoneSquare} className="mr-2" /> 9876543210
                    </a>
                    </li>
                    <li>
                    <a href="tel:+91 8209997899" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faPhoneSquare} className="mr-2" /> 8209997899
                    </a>
                    </li>
                    <li>
                    <a href="mailto:alokfranchise22@gmail.com" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> alokfranchise22@gmail.com
                    </a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMap} className="mr-2" /> Mumbai
                    </li>
                </ul>
                </div>

                {/* Footer Column 2: Links */}
                <div className="footer-column">
                <h4 className="text-xl font-semibold">Links</h4>
                <ul className="mt-4">
                    <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
                    <li><a href="/our-team" className="text-white hover:text-gray-300">Our Team</a></li>
                    <li><a href="/policy" className="text-white hover:text-gray-300">Privacy Policy</a></li>
                    <li><a href="/gallery" className="text-white hover:text-gray-300">Our Gallery</a></li>
                    <li><a href="/news" className="text-white hover:text-gray-300">News</a></li>
                    <li><a href="/tc" className="text-white hover:text-gray-300">TC</a></li>
                </ul>
                </div>

                {/* Footer Column 3: Our Programs */}
                <div className="footer-column">
                <h4 className="text-xl font-semibold">Our Programs</h4>
                <ul className="mt-4">
                    <li><a href="/programs#10" className="text-white hover:text-gray-300">Nursery</a></li>
                    <li><a href="/programs#9" className="text-white hover:text-gray-300">Day Care</a></li>
                    <li><a href="/programs#22" className="text-white hover:text-gray-300">Play Group</a></li>
                    <li><a href="/programs#20" className="text-white hover:text-gray-300">Junior KG</a></li>
                    <li><a href="/programs#21" className="text-white hover:text-gray-300">Senior KG</a></li>
                </ul>
                </div>

                {/* Footer Column 4: Social Links */}
                <div className="footer-column text-center">
                <h4 className="text-xl font-semibold">Social Links</h4>
                <ul className="flex justify-center mt-4 space-x-4">
                    <li>
                    <a href="https://www.facebook.com" target="_blank" className="text-white hover:text-gray-300 text-2xl">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com" target="_blank" className="text-white hover:text-gray-300 text-2xl">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.youtube.com" target="_blank" className="text-white hover:text-gray-300 text-2xl">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom bg-red-700 py-4">
            <div className="container mx-auto text-center">
            <p>
                Copyrights © {currentYear} Educase Global School. Technologically Powered by{' '}
                <a href="https://educase.io" target="_blank" className="underline text-white">
                Educase India
                </a>. All Rights Reserved
            </p>
            </div>
        </div>

        {/* Back to Top Button */}
        <button type="button" className="btn theme-btn btn-style-one btn-floating btn-lg fixed bottom-6 right-6">
            <i className="fas fa-arrow-up"></i>
        </button>

        {/* Enroll Now Button */}
        <div className="btn-box fixed bottom-6 left-6">
            <a className="theme-btn btn-style-one bg-green-600 text-white" id="enroll" href="/enroll-now">
            Enroll Now
            </a>
        </div>
        </footer>
    );
};

export default Footer;
