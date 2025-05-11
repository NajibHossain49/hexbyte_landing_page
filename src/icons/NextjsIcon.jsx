// src/icons/NextjsIcon.jsx
import React from "react";
import nextjsIcon from "../assets/icons/nextjs.png";

const NextjsIcon = ({ width = "24", height = "24", className = "" }) => {
  return (
    <img
      src={nextjsIcon}
      alt="Next.js Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default NextjsIcon;
