import gridImage from "../../assets/icons/grid.png";
import cubesImage from "../../assets/icons/cubes.png";
import dotsImage from "../../assets/icons/dots.png";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden text-white"
      style={{
        background: "linear-gradient(to bottom right, #000000 40%, #0d0d0d 60%, #000000 100%)",
      }}
    >
      {/* Grid Background Layer - Full coverage */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${gridImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
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
      <div className="relative z-40 max-w-6xl mx-auto px-6 pt-20 md:px-12 lg:pt-28">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug">
          Transform ideas into <br />
          <span className="text-purple-400">
            scalable, secure, and intelligent solutions
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;