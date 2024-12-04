"use client";

import React from "react";

interface HeadingProps {
  title: string;
  color?: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, color = "rgb(0, 185, 142)", className }) => {
  return (
    <h2
      style={{ color }}
      className={`text-2xl font-bold ${className} text-center`}
    >
      {title}
    </h2>
  );
};

export default Heading;
