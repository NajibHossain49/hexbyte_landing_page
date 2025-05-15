// src/icons/AWSIcon.jsx
import React from "react";
import awsIcon from "../assets/icons/aws-icon-512x512-4v2f55fn.png";

const AWSIcon = ({ width = "18", height = "18", className = "" }) => {
  return (
    <img
      src={awsIcon}
      alt="AWS Icon"
      width={width}
      height={height}
      className={`rounded ${className}`}
    />
  );
};

export default AWSIcon;
