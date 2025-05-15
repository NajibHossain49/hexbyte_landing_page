import cubesImage from "../../assets/icons/cubes.png";
import dotsImage from "../../assets/icons/dots.png";
import gridImage from "../../assets/icons/grid.png";
// Icons
import AWSIcon from "../../icons/AWSIcon";
import DatabaseIcon from "../../icons/DatabaseIcon";
import ExpoIcon from "../../icons/ExpoIcon";
import GCPIcon from "../../icons/GCPIcon";
import GoLogoBlue from "../../icons/Go-Logo_Blue";
import HetznerIcon from "../../icons/HetznerIcon";
import MongoDBIcon from "../../icons/MongoDBIcon";
import NextjsIcon from "../../icons/NextjsIcon";
import OracleIcon from "../../icons/OracleIcon";
import PostgresIcon from "../../icons/PostgresIcon";
import ReactIcon from "../../icons/reactIcon";
import ReactNativeIcon from "../../icons/ReactNativeIcon";
import RedisIcon from "../../icons/RedisIcon";
import ScalewayIcon from "../../icons/ScalewayIcon";
import ServerlessIcon from "../../icons/ServerlessIcon";
import VercelIcon from "../../icons/VercelIcon";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(to bottom right, #000000 40%, #0d0d0d 60%, #000000 100%)",
      }}
    >
      {/* Grid Background Layer - Full coverage */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${gridImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dots/Stars Layer */}
      <div
        className="absolute inset-0 z-10 bg-cover bg-center opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${dotsImage})`,
        }}
      />

      {/* Ellipse Glow - Bottom Right */}
      <div className="absolute w-[400px] h-[400px] bg-[#8C45FF] rounded-full blur-[180px] bottom-[20px] right-[20px] z-20 pointer-events-none" />

      {/* Cubes Image */}
      <img
        src={cubesImage}
        alt="Cubes"
        className="absolute bottom-0 right-0 w-[700px] max-w-none z-30 object-contain pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-40 w-full max-w-3xl pl-32 pt-20 lg:pt-28">
        <h1 className="text-left text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug">
          Transform ideas into <br />
          <span className="text-purple-400">
            scalable, secure, and <br />
            intelligent solutions
          </span>
        </h1>

        <div className="mt-10 space-y-4">
          {/* Line 1 - 1 button */}
          <div className="flex flex-wrap gap-2">
            <button
              className="flex items-center gap-2 px-4 py-1.5 text-white rounded-full border"
              style={{
                borderColor: "rgb(13, 72, 183)",
                background:
                  "linear-gradient(45deg, rgba(13, 72, 183, 0.5), rgba(60, 105, 191, 0.5))",
              }}
            >
              <GoLogoBlue />
              Go
            </button>
          </div>

          {/* Line 2 - 2 buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              className="flex items-center gap-2.5 px-6 py-1.5 text-white rounded-full border"
              style={{
                borderColor: "rgb(82, 46, 142)",
                background:
                  "linear-gradient(45deg, rgba(31, 8, 69, 0.5), rgba(82, 46, 142, 0.5))",
              }}
            >
              <ReactIcon />
              React
            </button>

            <button
              className="flex items-center gap-2.5 px-6 py-1.5 text-white rounded-full border"
              style={{
                borderColor: "rgb(82, 46, 142)",
                background:
                  "linear-gradient(45deg, rgba(31, 8, 69, 0.5), rgba(82, 46, 142, 0.5))",
              }}
            >
              <NextjsIcon />
              NextJS
            </button>
          </div>

          {/* Line 3 - 2 buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              className="flex items-center gap-2.5 px-6 py-1.5 text-white rounded-full border"
              style={{
                borderColor: "rgb(75, 68, 54)",
                background:
                  "linear-gradient(45deg, rgba(32, 23, 4, 0.5), rgba(75, 68, 54, 0.5))",
              }}
            >
              <ReactNativeIcon />
              React Native
            </button>

            <button
              className="flex items-center gap-2.5 px-6 py-1.5 text-white rounded-full border"
              style={{
                borderColor: "rgb(75, 68, 54)",
                background:
                  "linear-gradient(45deg, rgba(32, 23, 4, 0.5), rgba(75, 68, 54, 0.5))",
              }}
            >
              <ExpoIcon />
              Expo + EAS
            </button>
          </div>

          {/* Line 4 - 4 buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              ["SQL", <DatabaseIcon />],
              ["MySQL", <DatabaseIcon />],
              ["MongoDB", <MongoDBIcon />],
              ["Redis", <RedisIcon />],
            ].map(([label, icon]) => (
              <button
                key={label}
                className="flex items-center gap-2.5 px-6 py-1.5 text-white rounded-full border"
                style={{
                  borderColor: "rgb(162, 79, 143)",
                  background:
                    "linear-gradient(45deg, rgba(46, 6, 37, 0.5), rgba(162, 79, 143, 0.5))",
                }}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>

          {/* Line 5 - 1 button */}
          <div className="flex flex-wrap gap-2">
            <button
              className="flex items-center gap-2.5 px-6 py-1.5 text-white rounded-full border"
              style={{
                borderColor: "rgb(162, 79, 143)",
                background:
                  "linear-gradient(45deg, rgba(46, 6, 37, 0.5), rgba(162, 79, 143, 0.5))",
              }}
            >
              <PostgresIcon />
              PostgreSQL
            </button>
          </div>

          {/* Line 6 - 4 buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              ["Scaleway", <ScalewayIcon />],
              ["Hetzner", <HetznerIcon />],
              ["AWS", <AWSIcon />],
              ["Oracle", <OracleIcon />],
            ].map(([label, icon]) => (
              <button
                key={label}
                className="flex items-center gap-2.5 px-6 py-1.5 text-white rounded-full border"
                style={{
                  borderColor: "rgb(16, 98, 123)",
                  background:
                    "linear-gradient(45deg, rgba(5, 34, 43, 0.5), rgba(16, 98, 123, 0.5))",
                }}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>

          {/* Line 7 - 3 buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              ["Serverless", <ServerlessIcon />],
              ["Vercel", <VercelIcon />],
              ["GCP", <GCPIcon />],
            ].map(([label, icon]) => (
              <button
                key={label}
                className="flex items-center gap-2.5 px-6 py-1.5 text-white rounded-full border"
                style={{
                  borderColor: "rgb(16, 98, 123)",
                  background:
                    "linear-gradient(45deg, rgba(5, 34, 43, 0.5), rgba(16, 98, 123, 0.5))",
                }}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
