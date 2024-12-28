"use client";

import React from "react";

const ProgramCard = ({ program }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative" style={{ height: "60%" }}>
        <a href={`/programs#${program.id}`}>
          <img
            src={program.imageSrc}
            alt={program.title || "Program Image"}
            className="object-cover w-full"
            style={{ height: "200px" }}
          />
        </a>
      </div>

      {/* Content */}
      <div
        className="p-4 text-center"
        style={{ height: "300px", backgroundColor: program.backgroundColor }}
      >
        {/* Title */}
        <h4 className="text-lg font-semibold mb-2">
          <a
            href={`/programs#${program.id}`}
            className="text-cyan-500 hover:underline"
          >
            {program.title}
          </a>
        </h4>

        {/* Description */}
        <div className="text-left text-gray-600 mb-4" style={{ height: "90px" }}>
          {program.description}
        </div>

        {/* Additional Info */}
        <ul className="text-gray-700">
          <li>
            <span className="font-bold">Age:</span> {program.ageRange}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgramCard;