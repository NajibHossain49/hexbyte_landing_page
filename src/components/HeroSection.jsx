import React from "react";

export default function HeroSection() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, rgb(0, 0, 0), rgb(32, 13, 66) 36.207%, rgb(79, 33, 161) 68.679%, rgb(164, 110, 219) 86.539%)",
      }}
    >
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
      <div className="flex flex-col items-center justify-center text-center text-white px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Hexbyte
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Empowering startups with cutting-edge technology and support.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Join the Waitlist
        </button>
      </div>
    </div>
  );
}
