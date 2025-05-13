// Import your images
import cubesImage from "../../assets/icons/cubes.png";
import dotsImage from "../../assets/icons/dots.png";
import gridImage from "../../assets/icons/grid.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Grid Layer */}
      <div
        className="absolute inset-0 z-0 bg-center opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${gridImage})`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Dots/Stars Layer */}
      <div
        className="absolute inset-0 z-10 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${dotsImage})` }}
      />

      {/* Ellipse Glow - Bottom Right */}
      <div className="absolute w-[500px] h-[500px] bg-[#8C45FF] rounded-full blur-[160px] bottom-6 right-6 z-20 pointer-events-none" />

      {/* Gradient Layer: Top-left black to bottom-right purple */}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, black 0%, rgba(0,0,0,0.8) 40%, rgba(128,0,128,0.3) 100%)",
          mixBlendMode: "normal",
        }}
      />

      {/* Cubes Image Layer - large and centered over bottom-right glow */}
      <img
        src={cubesImage}
        alt="Cubes"
        className="absolute bottom-0 right-0 w-[700px] max-w-none z-30 object-contain pointer-events-none"
      />

      {/* Main Content - higher + smaller */}
      <div className="relative z-40 max-w-6xl mx-auto px-6 pt-20 md:px-12 lg:pt-28">
        {/* <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug"> 
          Transform ideas into <br /> 
          <span className="text-purple-400"> 
            scalable, secure, and intelligent solutions 
          </span> 
        </h1> */}

        {/* Add buttons or feature list here */}
      </div>
    </section>
  );
};

export default HeroSection;
