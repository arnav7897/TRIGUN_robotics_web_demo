import React from "react";
import SolutionCard from "./SolutionCard";
import "./hero.css"

const Solutions = () => {
  const product_data = [
    {
      heading: "Train Smarter, Work Safer",
      detail: "Enhance workforce efficiency with our immersive VR Robotics Training Simulator. Designed for industrial and military applications, it provides risk-free hands-on experience with robotic systems, reducing training costs and improving skill retention."
    },
    {
      heading: "Optimize, Simulate, Automate",
      detail: `Our VR Industrial Automation Suite allows businesses to test and
            refine automation workflows in a virtual space before deploying them
            in real-world factories. Reduce downtime, detect errors early, and
            enhance production efficiency.`
    },
    {
      heading: "Control Robots from Anywhere",
      detail: `Experience seamless robotic control from anywhere in the world with
            our VR-powered Remote Control System. Operators can manipulate
            robotic arms, drones, or autonomous machines with precision using an
            intuitive VR interface.`
    },
    {
      heading: "Work Alongside AI-Driven Robots in VR",
      detail: `Our VR Human-Robot Collaboration Platform bridges the gap between
            humans and AI-powered robotic systems. Interact, collaborate, and
            fine-tune robotic workflows in a fully immersive environment before
            real-world deployment.`
    }
  ]
  return (
    <>
      <h1 className="text-bold sticky top-[10vh] text-center text-4xl my-10">
        Our Products
      </h1>
      {
        product_data.map((product,index) => {
          return <div className="product-section sticky top-[15vh] h-[70vh] w-[70vw] mx-auto px-[20px] flex items-center justify-center gap-20 bg-violet-200 rounded-[20px] mb-[50px]">
          <div className="product flex-col w-[50%]">
            <h2 className="font-bold text-xl">{product.heading}</h2>
            <p>
              {product.detail}
            </p>
          </div>
          <SolutionCard />
        </div>
        })
      }
      
    </>
  );
};

export default Solutions;
