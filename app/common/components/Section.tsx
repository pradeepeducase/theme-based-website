"use client";

import React from "react";

interface SectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  id?: string; 
}

const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor = "rgb(255, 255, 255)",
  className,
  id,
}) => {
  return (
    <section
      id={id}
      style={{ backgroundColor }}
      className={`py-8 px-4 ${className}`}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
