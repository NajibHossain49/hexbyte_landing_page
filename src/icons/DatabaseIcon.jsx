// src/icons/DatabaseIcon.jsx
import React from "react";
import databaseIcon from "../assets/icons/mysqlworkbench_93532.webp"; 

const DatabaseIcon = ({ width = "24", height = "24", className = "" }) => {
  return (
    <img
      src={databaseIcon}
      alt="Database Icon"
      width={width}
      height={height}
      className={`rounded-full ${className}`}
    />
  );
};

export default DatabaseIcon;
