// src/icons/ScalewayIcon.jsx
import React from "react";
import scalewayIcon from "../assets/icons/scaleway.png";

const ScalewayIcon = ({ width = "16", height = "16", className = "" }) => {
  return (
    <img
      src={scalewayIcon}
      alt="Scaleway Icon"
      width={width}
      height={height}
      className={`rounded ${className}`}
    />
  );
};

export default ScalewayIcon;
