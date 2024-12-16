"use client";

import React from "react";
import Button from "./Button";

const ImageContent = ({
  imageSrc,
  altText = "image",
  paragraph,
  imageClassName = "w-full",
  contentClassName = "text-gray-600 text-lg",
}) => {
  const aboutData = {
    buttonText: "More About Us",
    buttonHref: "/about",
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Text Content */}
      <div className={`lg:w-1/2 ${contentClassName}`}>
        <p>{paragraph}</p>
        <div className="max-w-40 mt-4">
          <Button label={aboutData.buttonText} href={aboutData.buttonHref} />
        </div>
      </div>

      {/* Image */}
      <div className="lg:w-1/2 flex justify-center">
        <img src={imageSrc} alt={altText} className={`${imageClassName}`} />
      </div>
    </div>
  );
};

export default ImageContent;
