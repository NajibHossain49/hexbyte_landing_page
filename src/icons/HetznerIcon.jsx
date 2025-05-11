// src/icons/HetznerIcon.jsx
import React from "react";
import hetznerIcon from "../assets/icons/hetzner-icon-1024x1024-fu4wjwkl.png";

const HetznerIcon = ({ width = "16", height = "16", className = "" }) => {
  return (
    <img
      src={hetznerIcon}
      alt="Hetzner Icon"
      width={width}
      height={height}
      className={`rounded ${className}`}
    />
  );
};

export default HetznerIcon;
