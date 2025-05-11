// src/icons/ExpoIcon.jsx
import React from "react";
import expoIcon from "../assets/icons/expo.jpg"; 

const ExpoIcon = ({ width = "24", height = "24", className = "" }) => {
  return (
    <img
      src={expoIcon}
      alt="Expo Logo"
      width={width}
      height={height}
      className={`rounded-full ${className}`} 
    />
  );
};

export default ExpoIcon;
