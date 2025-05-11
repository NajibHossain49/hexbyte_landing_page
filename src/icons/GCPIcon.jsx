// src/icons/GCPIcon.jsx
import React from "react";
import gcpIcon from "../assets/icons/google-cloud-platform-logo-icon-2048x1824-pg4wzspq.png";

const GCPIcon = ({ width = "16", height = "16", className = "" }) => {
  return (
    <img
      src={gcpIcon}
      alt="GCP Icon"
      width={width}
      height={height}
      className={`rounded ${className}`}
    />
  );
};

export default GCPIcon;
