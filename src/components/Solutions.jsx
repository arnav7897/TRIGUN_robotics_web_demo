import React from "react";
import SolutionCard from "./SolutionCard";

const Solutions = () => {
  return (
    <>
      <h1 className="text-bold sticky top-[10vh] text-center text-4xl my-10">
        Our Products
      </h1>
      <div className="sticky top-[15vh] h-[70vh] w-[70vw] mx-auto px-[20px] flex items-center justify-center gap-20 bg-violet-200 rounded-[20px]">
        <div className="flex-col w-[30%]">
          <h2>"Train Smarter, Work Safer"</h2>
          <p>
            Enhance workforce efficiency with our immersive VR Robotics Training
            Simulator. Designed for industrial and military applications, it
            provides risk-free hands-on experience with robotic systems,
            reducing training costs and improving skill retention.
          </p>
        </div>
        <SolutionCard />
      </div>
      <div className="sticky top-[15vh] h-[70vh] w-[70vw] mx-auto px-[20px] flex items-center justify-center gap-20 bg-violet-300 rounded-[20px]">
        <div className="flex-col w-[30%] ">
          <h2>"Optimize, Simulate, Automate"</h2>
          <p>
            Our VR Industrial Automation Suite allows businesses to test and
            refine automation workflows in a virtual space before deploying them
            in real-world factories. Reduce downtime, detect errors early, and
            enhance production efficiency.
          </p>
        </div>
        <SolutionCard />
      </div>
      <div className="sticky top-[15vh] h-[70vh] w-[70vw] mx-auto px-[20px] flex items-center justify-center gap-20 bg-violet-200 rounded-[20px]">
        <div className="flex-col w-[30%] ">
          <h2>"Control Robots from Anywhere"</h2>
          <p>
            Experience seamless robotic control from anywhere in the world with
            our VR-powered Remote Control System. Operators can manipulate
            robotic arms, drones, or autonomous machines with precision using an
            intuitive VR interface.
          </p>
        </div>
        <SolutionCard />
      </div>
      <div className="sticky top-[15vh] h-[70vh] w-[70vw] mx-auto px-[20px] flex items-center justify-center gap-20 bg-violet-300 rounded-[20px]">
        <div className="flex-col w-[30%]">
          <h2>"Work Alongside AI-Driven Robots in VR"</h2>
          <p>
            Our VR Human-Robot Collaboration Platform bridges the gap between
            humans and AI-powered robotic systems. Interact, collaborate, and
            fine-tune robotic workflows in a fully immersive environment before
            real-world deployment.
          </p>
        </div>
        <SolutionCard />
      </div>
    </>
  );
};

export default Solutions;
