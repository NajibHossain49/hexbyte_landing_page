import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-[#0D001A] py-12 px-4 text-[#A4A7AE]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Social Icons */}
        <div className="flex gap-4 text-xl">
          <FaXTwitter className="cursor-pointer hover:text-white" />
          <FaLinkedin className="cursor-pointer hover:text-white" />
          <FaFacebook className="cursor-pointer hover:text-white" />
          <FaGithub className="cursor-pointer hover:text-white" />
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-center">
          <span className="cursor-pointer hover:text-white">Terms</span>
          <span className="cursor-pointer hover:text-white">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-white">Imprint</span>
          <span className="cursor-pointer hover:text-white">Contact us</span>
          <span className="cursor-pointer hover:text-white">Copyright</span>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-center md:text-right">
          © 2025 <span className="text-gray-300">hexbyte</span> All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
