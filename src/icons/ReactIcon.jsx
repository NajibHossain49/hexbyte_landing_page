// src/icons/ReactIcon.jsx
import React from "react";
import reactIcon from "../assets/icons/react.svg";

const ReactIcon = ({ width = "24", height = "24", className = "" }) => {
  return (
    <img
      src={reactIcon}
      alt="React Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ReactIcon;
