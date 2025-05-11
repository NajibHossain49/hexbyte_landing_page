// src/icons/SQLIcon.jsx
import React from "react";
import sqlIcon from "../assets/icons/sql-database-icon-logo-design-ui-or-ux-app-png.webp"; 

const SQLIcon = ({ width = "24", height = "24", className = "" }) => {
  return (
    <img
      src={sqlIcon}
      alt="SQL Icon"
      width={width}
      height={height}
      className={`rounded-full ${className}`}
    />
  );
};

export default SQLIcon;
