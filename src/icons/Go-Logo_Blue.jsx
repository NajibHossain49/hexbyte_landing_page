// src/icons/Go-Logo_Blue.jsx
import React from "react";
import goLogo from "../assets/icons/Go-Logo_Blue.png";

const GoLogoBlue = ({ width = "24", height = "24", className = "" }) => {
  return (
    <img
      src={goLogo}
      alt="Go Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default GoLogoBlue;
