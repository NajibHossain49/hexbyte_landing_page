// src/icons/PostgresIcon.jsx
import React from "react";
import postgresIcon from "../assets/icons/download.png"; 

const PostgresIcon = ({ width = "24", height = "24", className = "" }) => {
  return (
    <img
      src={postgresIcon}
      alt="PostgreSQL Icon"
      width={width}
      height={height}
      className={`rounded-full ${className}`}
    />
  );
};

export default PostgresIcon;
