// src/icons/OracleIcon.jsx
import React from "react";
import oracleIcon from "../assets/icons/oracle-logo-symbol-vector.png";

const OracleIcon = ({ width = "16", height = "16", className = "" }) => {
  return (
    <img
      src={oracleIcon}
      alt="Oracle Icon"
      width={width}
      height={height}
      className={`rounded ${className}`}
    />
  );
};

export default OracleIcon;
