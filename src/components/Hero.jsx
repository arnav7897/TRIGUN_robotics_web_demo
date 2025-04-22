import React from "react";
import "./hero.css";
import Loader from "./heroanimation";
import { motion } from "framer-motion";
const textVariants1 = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.5 },
  },
};
const textVariants2 = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.05, duration: 0.5 },
  },
};

const Hero = () => {
  const first = "Revolutionizing Reality ".split("");
  const second = "with Advanced VR Solutions".split("");
  const third =
    "At Trigun Robotic Systems, we create immersive VR experiences".split("");
  const fourth =
    "that transform industries, enhance training, and redefine human interaction.".split(
      ""
    );

  return (
    <>
      <div className="absolute top-12 left-12 mt-30 z-0">
        <Loader />
      </div>
      <section className="w-full h-screen spacer layer5 flex items-center justify-center">
        <div className=" mx-auto items-center absolute top-24 h-3/4 flex flex-col justify-center ml-[30px] mr-[30px]">
          <motion.div
            className="upper-text text-6xl text-[#126656]"
            initial="hidden"
            animate="visible"
            variants={textVariants1}
          >
            {first.map((letter, index) => (
              <motion.span key={index} variants={textVariants1}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="upper-text text-6xl text-[#126656]"
            initial="hidden"
            animate="visible"
            variants={textVariants1}
          >
            {second.map((letter, index) => (
              <motion.span key={index} variants={textVariants1}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="lower-text text-3xl mt-10 text-[#126656]"
            initial="hidden"
            animate="visible"
            variants={textVariants2}
          >
            {third.map((letter, index) => (
              <motion.span key={index} variants={textVariants2}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="lower-text text-3xl mt-10 text-[#126656]"
            initial="hidden"
            animate="visible"
            variants={textVariants2}
          >
            {fourth.map((letter, index) => (
              <motion.span key={index} variants={textVariants2}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className="mr-4 mt-30"></div>
      </section>
    </>
  );
};

export default Hero;
