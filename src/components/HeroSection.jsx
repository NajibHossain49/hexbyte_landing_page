import { Database } from "lucide-react";
import React from "react";
import AWSIcon from "../icons/AWSIcon";
import DatabaseIcon from "../icons/DatabaseIcon";
import ExpoIcon from "../icons/ExpoIcon";
import GCPIcon from "../icons/GCPIcon";
import GoLogoBlue from "../icons/Go-Logo_Blue";
import HetznerIcon from "../icons/HetznerIcon";
import MongoDBIcon from "../icons/MongoDBIcon";
import NextjsIcon from "../icons/NextjsIcon";
import OracleIcon from "../icons/OracleIcon";
import PostgresIcon from "../icons/PostgresIcon";
import ReactIcon from "../icons/reactIcon";
import ReactNativeIcon from "../icons/ReactNativeIcon";
import RedisIcon from "../icons/RedisIcon";
import ScalewayIcon from "../icons/ScalewayIcon";
import ServerlessIcon from "../icons/ServerlessIcon";
import VercelIcon from "../icons/VercelIcon";

// Define tech tags with icons and colors
const techTags = [
  [
    {
      name: "Go",
      icon: <GoLogoBlue width="24" height="24" className="mr-1.5" />,
    },
  ],
  [
    {
      name: "React",
      icon: <ReactIcon width="16" height="16" className="mr-1.5" />,
    },
    {
      name: "NextJS",
      icon: <NextjsIcon width="20" height="20" className="mr-1.5" />,
    },
  ],
  [
    {
      name: "React Native",
      icon: <ReactNativeIcon width="16" height="16" className="mr-1.5" />,
    },
    {
      name: "Expo + EAS",
      icon: <ExpoIcon width="18" height="18" className="mr-1.5" />,
    },
  ],
  [
    {
      name: "SQL",
      icon: <Database size={16} className="mr-1" color="#F29111" />,
    },
    {
      name: "MySQL",
      icon: <DatabaseIcon width="18" height="18" className="mr-1.5" />,
    },
    {
      name: "MongoDB",
      icon: <MongoDBIcon width="16" height="16" className="mr-1.5" />,
    },
    {
      name: "Redis",
      icon: <RedisIcon width="16" height="16" className="mr-1.5" />,
    },
  ],
  [
    {
      name: "PostgreSQL",
      icon: <PostgresIcon width="20" height="20" className="mr-1.5" />,
    },
  ],
];

// Define infra tags with icons and colors
const infraTags = [
  {
    name: "Scaleway",
    icon: <ScalewayIcon width="16" height="16" className="mr-1" />,
  },
  {
    name: "Hetzner",
    icon: <HetznerIcon width="16" height="16" className="mr-1" />,
  },
  {
    name: "AWS",
    icon: <AWSIcon width="16" height="16" className="mr-1" />,
  },
  {
    name: "Oracle",
    icon: <OracleIcon width="16" height="16" className="mr-1" />,
  },
  {
    name: "Serverless",
    icon: <ServerlessIcon width="16" height="16" className="mr-1" />,
  },
  {
    name: "Vercel",
    icon: <VercelIcon width="16" height="16" className="mr-1" />,
  },
  {
    name: "GCP",
    icon: <GCPIcon width="16" height="16" className="mr-1" />,
  },
];

export default function HeroSection() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, rgb(0, 0, 0), rgb(32, 13, 66) 36.207%, rgb(79, 33, 161) 68.679%, rgb(164, 110, 219) 86.539%)",
      }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between p-3.5 text-white border-b border-white/20 pl-24 pr-24">
        <div className="text-2xl font-bold">hexbyte</div>
        <div className="flex items-center space-x-12 ml-auto">
          <a href="#" className="text-white hover:underline">
            Startup program
          </a>
          <button className="bg-[#632CA5] text-white px-5 py-2 rounded-full font-semibold hover:bg-purple-700 transition">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-start text-white px-6 md:px-24 py-24 gap-6 md:gap-10">
        {/* Left Side Text */}
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-snug">
            Transform ideas into scalable,
            <br />
            secure, and intelligent
            <br />
            <span className="text-purple-300">solutions</span>
          </h1>
        </div>

        {/* Right Side Tech Tags */}
        <div className="flex flex-col gap-3">
          {techTags.map((group, i) => (
            <div key={i} className="flex flex-wrap gap-3.5">
              {group.map((tag, j) => (
                <span
                  key={j}
                  className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/20 flex items-center"
                >
                  {tag.icon}
                  {tag.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Infrastructure Tags */}
      <div className="flex justify-center flex-wrap gap-4 mt-28 px-4">
        {infraTags.map((tag, i) => (
          <span
            key={i}
            className="bg-gray-600/75 text-white font-medium text-sm px-4 py-1 rounded-full border border-gray-500  flex items-center"
          >
            {tag.icon}
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}
