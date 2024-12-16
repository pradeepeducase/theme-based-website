"use client";

import React from "react";
import Link from "next/link";

const Button = ({
  label,
  href,
  className = "bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600",
}) => {
  return (
    <Link href={href}>
      <div className={className}>{label}</div>
    </Link>
  );
};

export default Button;
