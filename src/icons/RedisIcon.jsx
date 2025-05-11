// src/icons/RedisIcon.jsx
import React from "react";
import redisIcon from "../assets/icons/redis_plain_logo_icon_146366.webp";

const RedisIcon = ({ width = "24", height = "24", className = "" }) => {
  return (
    <img
      src={redisIcon}
      alt="Redis Icon"
      width={width}
      height={height}
      className={`rounded-full ${className}`}
    />
  );
};

export default RedisIcon;
