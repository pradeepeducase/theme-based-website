"use client";

import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import ImageContent from "./ImageContent";

const AboutUsSection = () => {
  const aboutData = {
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

  return (
    <Section
      id={aboutData.sectionId}
      backgroundColor={aboutData.backgroundColor}
      className="about-section"
    >
      {/* Heading */}
      <Heading
        title={aboutData.heading}
        color={aboutData.headingColor}
        className="mb-6"
      />

      {/* Image & Content */}
      <ImageContent
        imageSrc={aboutData.imageSrc}
        altText="About Us Image"
        paragraph={aboutData.paragraph}
      />
    </Section>
  );
};

export default AboutUsSection;
