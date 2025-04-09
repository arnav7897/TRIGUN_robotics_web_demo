import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import teamData from "../data/ourteam";
const AboutMission = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundStyle = {
    background: `linear-gradient(145deg, 
      rgba(245, 243, 235, ${Math.min(0.5 + scrollY / 1000, 0.9)}), 
      rgba(124, 143, 115, ${Math.min(0.25 + scrollY / 1000, 0.5)}))`,
    transition: "background 0.3s ease-in-out",
  };


  return (
    <>
      <section
        className="w-full h-screen flex items-center justify-center font-poppins overflow-hidden relative px-8"
        style={backgroundStyle}
      >
        {/* Animated Blobs */}
        <motion.div
          className="absolute w-96 h-96 bg-[#D2C0A1] rounded-full opacity-30 blur-2xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-[#7C8F73] rounded-full opacity-20 blur-2xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          style={{ bottom: '10%', right: '5%' }}
        />

        {/* Main Content */}
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-[#7C8F73]">About Us</h2>
            <p className="text-lg text-[#5F5B4D]">
              We are a creative technology studio passionate about innovation, experience design,
              and storytelling. Our work helps brands communicate with authenticity and impact,
              through smart digital experiences and purposeful design.
            </p>

            <h3 className="text-3xl font-semibold text-[#556B4E] mt-10">Our Mission</h3>
            <p className="text-base text-[#4F5F45]">
              At Trigun, our mission is to connect people and ideas through modern, intuitive,
              and emotionally-driven interfaces. We believe design is not just what it looks like,
              but how it works — and feels. Our goal is to bridge the gap between art and tech,
              crafting products that inspire, engage, and empower.
            </p>
          </motion.div>

          {/* SVG Illustration */}
          <motion.div
            className="w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-[320px] h-[320px]">
              <motion.div
                className="absolute inset-0 animate-pulse"
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path
                    fill="#D2C0A1"
                    d="M48.8,-61.5C62.4,-48.8,72.9,-31.8,72.7,-15.6C72.5,0.6,61.6,15.9,51.3,28.8C41.1,41.7,31.5,52.2,18.6,58.2C5.6,64.1,-11.7,65.4,-28.5,60.3C-45.4,55.2,-61.9,43.7,-68.5,28.1C-75.2,12.5,-71.9,-6.1,-64.1,-22.5C-56.2,-38.8,-43.9,-52.9,-29,-64.3C-14.1,-75.7,2.4,-84.3,18.6,-81.4C34.9,-78.4,49.1,-63.2,48.8,-61.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </motion.div>

              {/* Team SVG from unDraw */}
              <img
                src="src/assets/freepik__background__31687.png"
                alt="Team Collaboration Illustration"
                className="z-10 relative w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full min-h-screen bg-[#F4F1E8] py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#5F5B4D] mb-4">Meet Our Team</h2>
          <p className="text-[#6C6752] mb-12 max-w-xl mx-auto">
            A passionate group of designers, developers, and dreamers working together to build meaningful digital experiences.
          </p>

          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {teamData.map((member, index) => (
              <div key={index} className="bg-[#E6DDCC] rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <img
                  src="src/assets/creative-team-concept-illustration_114360-3894.avif"
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#B1AE89] mb-4"
                />
                <h3 className="text-xl font-semibold text-[#403D30]">{member.name}</h3>
                <p className="text-[#5A5642] text-sm mb-2">{member.role}</p>
                <p className="text-[#6C6752] text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMission;
