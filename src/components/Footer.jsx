import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-[#D2C0A1] py-10 px-8 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">Trigun Studio</h3>
          <p className="text-sm mt-2 text-[#B1AE89]">
            Designing innovation with elegance & purpose.
          </p>
        </div>

        <div className="flex space-x-6 text-xl">
          <a
            href="#"
            className="text-[#D2C0A1] hover:text-[#B1AE89] transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-[#D2C0A1] hover:text-[#B1AE89] transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-[#D2C0A1] hover:text-[#B1AE89] transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-[#D2C0A1] hover:text-[#B1AE89] transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-6 text-[#847C62]">
        &copy; {new Date().getFullYear()} Trigun Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
