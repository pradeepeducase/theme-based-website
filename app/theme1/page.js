"use client";

import React, { useEffect, useState } from "react";
import AboutUsSection from "../common/components/AboutUsSection";
import TeamSection from "../common/components/teamSection";
import CarouselWrapper from "../common/components/Carousel";
import Heading from "../common/components/Heading";
import ProgramCard from "../common/components/ProgramCard";

export default function Theme1HomePage() {

  const [programs, setPrograms] = useState([]);

  // Fetch programs dynamically
  useEffect(() => {
    async function fetchPrograms() {
      // Simulated API response
      const apiResponse = [
        {
          id: 220,
          title: "UKG / Senior KG / PP2",
          imageSrc:
            "https://media.jisethji.com/inky-palms-franchise1/website/our-program/our_program_1690522583.png",
          description:
            "Our KG senior program prepares children for the transition to elementary school and understand the importance of foundational learning.",
          ageRange: "5-6 years",
          backgroundColor: "#ffffff",
        },
        {
          id: 221,
          title: "Junior KG / PP1",
          imageSrc:
            "https://media.jisethji.com/inky-palms-franchise1/website/our-program/our_program_1690522583.png",
          description:
            "Our Junior KG program focuses on helping children develop essential skills for their holistic growth.",
          ageRange: "4-5 years",
          backgroundColor: "#f7f7f7",
        },
        {
          id: 222,
          title: "Junior KG / PP1",
          imageSrc:
            "https://media.jisethji.com/inky-palms-franchise1/website/our-program/our_program_1690522583.png",
          description:
            "Our Junior KG program focuses on helping children develop essential skills for their holistic growth.",
          ageRange: "4-5 years",
          backgroundColor: "#f7f7f7",
        },
        {
          id: 223,
          title: "Junior KG / PP1",
          imageSrc:
            "https://media.jisethji.com/inky-palms-franchise1/website/our-program/our_program_1690522583.png",
          description:
            "Our Junior KG program focuses on helping children develop essential skills for their holistic growth.",
          ageRange: "4-5 years",
          backgroundColor: "#f7f7f7",
        },
      ];

      setPrograms(apiResponse);
    }

    fetchPrograms();
  }, []);

  const carouselData = [
    { id: 1, content: "1", bgColor: "bg-red-300" },
    { id: 2, content: "2", bgColor: "bg-blue-300" },
    { id: 3, content: "3", bgColor: "bg-green-300" },
    { id: 4, content: "4", bgColor: "bg-yellow-300" },
    { id: 5, content: "5", bgColor: "bg-gray-300" },
    { id: 6, content: "6", bgColor: "bg-pink-300" },
  ];

  const aboutUsData = {
    heading: "About Us",
    paragraph:
      "Educase India is a one-stop solution to all the additional resources that a school/ preschool needs. A multi-functional service provider to boost your preschool admissions and keep it at par with the changing needs of techno freak society.",
    imageSrc:
      "https://media.jisethji.com/educase-india/website/page-content/home_1713526346.png",
    buttonText: "More About Us",
    buttonHref: "/about",
    sectionId: "about",
    backgroundColor: "rgb(255, 255, 255)",
    headingColor: "rgb(0, 185, 142)",
  };

  const ourTeamData = {
    heading: "Principle",
    paragraph:
      "Educase India is a one-stop solution to all the additional resources that a school/ preschool needs. A multi-functional service provider to boost your preschool admissions and keep it at par with the changing needs of techno freak society.",
    imageSrc:
      "https://media.jisethji.com/educase-india/website/page-content/home_1713526346.png",
    buttonText: "More About Us",
    buttonHref: "/about",
    sectionId: "about",
    backgroundColor: "rgb(255, 255, 255)",
    headingColor: "rgb(0, 185, 142)",
  };

  return (
    <div>
      {/* Carousel Section */}
      <CarouselWrapper
        options={{
          loop: true,
          nav: true,
          dots: true,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 1 },
          },
        }}
        className="owl-carousel"
      >
        {carouselData.map((item) => (
          <div key={item.id} className={`item ${item.bgColor} p-8`}>
            <h4>{item.content}</h4>
          </div>
        ))}
      </CarouselWrapper>

      {/* About Us Section */}
      <div className="container mx-auto">
        <AboutUsSection data={aboutUsData} />
      </div>
      {/* Our Team Section */}
      <div className="container mx-auto">
        <Heading title="Our Team"></Heading>
        <CarouselWrapper
          options={{
            loop: true,
            nav: true,
            dots: true,
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
              1024: { items: 1 },
            },
          }}
          className="owl-carousel"
        >
          <TeamSection data={ourTeamData} />
          <TeamSection data={ourTeamData} />
        </CarouselWrapper>
      </div>
      <div className="container mx-auto my-10">
        <Heading title="Our Programs"></Heading>
        <CarouselWrapper
          options={{
            loop: true,
            nav: true,
            dots: true,
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 },
            },
          }}
          className="owl-carousel"
        >
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </CarouselWrapper>
      </div>
    </div>
  );
}
