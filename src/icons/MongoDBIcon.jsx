// src/icons/MongoDBIcon.jsx
import React from "react";
import mongodbIcon from "../assets/icons/mongodb_original_logo_icon_146424.webp";

const MongoDBIcon = ({ width = "24", height = "24", className = "" }) => {
  return (
    <img
      src={mongodbIcon}
      alt="MongoDB Icon"
      width={width}
      height={height}
      className={`rounded-full ${className}`}
    />
  );
};

export default MongoDBIcon;
