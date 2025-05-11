// src/icons/ReactNativeIcon.jsx
import React from "react";
import reactNativeIcon from "../assets/icons/react.svg"; 

const ReactNativeIcon = ({ width = "24", height = "24", className = "" }) => {
  return (
    <img
      src={reactNativeIcon}
      alt="React Native Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ReactNativeIcon;
