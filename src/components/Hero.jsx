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
  const first = "Collaborate Effectively,".split("");
  const second = "and Beautifully.".split("");
  const third =
    "Trigun provides an effective and joyful way to manage your creative projects".split(
      ""
    );

  return (
    <>
      <section className="w-full h-screen bg-green-200 spacer layer5 flex">
        <div className="absolute top-12 left-12 mt-30 z-0">
          <Loader />
        </div>

        <div className="w-full items-center absolute top-24 h-3/4 flex flex-col justify-center ">
          <motion.div
            className="upper-text text-6xl"
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
            className="upper-text text-6xl"
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
            className="upper-text text-3xl mt-10"
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
