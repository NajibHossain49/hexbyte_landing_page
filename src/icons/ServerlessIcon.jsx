// src/icons/ServerlessIcon.jsx
import React from "react";
import serverlessIcon from "../assets/icons/serverless_logo_icon_168838.webp";

const ServerlessIcon = ({ width = "16", height = "16", className = "" }) => {
  return (
    <img
      src={serverlessIcon}
      alt="Serverless Icon"
      width={width}
      height={height}
      className={`rounded ${className}`}
    />
  );
};

export default ServerlessIcon;
