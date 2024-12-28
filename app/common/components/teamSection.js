"use client";

import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import ImageContent from "./ImageContent";

const TeamSection = ({ data }) => {
  return (
    <Section
      id={data.sectionId}
      backgroundColor={data.backgroundColor}
      className="about-section"
    >
      {/* Heading */}
      <Heading title={data.heading} color={data.headingColor} className="mb-6" />

      {/* Image & Content */}
      <ImageContent
        imageSrc={data.imageSrc}
        altText="About Us Image"
        paragraph={data.paragraph}
      />
    </Section>
  );
};

export default TeamSection;