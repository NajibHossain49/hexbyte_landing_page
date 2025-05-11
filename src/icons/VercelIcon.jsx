// src/icons/VercelIcon.jsx
import React from "react";
import vercelIcon from "../assets/icons/images.png";

const VercelIcon = ({ width = "16", height = "16", className = "" }) => {
  return (
    <img
      src={vercelIcon}
      alt="Vercel Icon"
      width={width}
      height={height}
      className={`rounded ${className}`}
    />
  );
};

export default VercelIcon;
