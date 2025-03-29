import React from "react";
import './hero.css'
import Loader from "./heroanimation";
const Hero = () => {
  return<>
  <section className="w-full h-screen spacer layer5 flex">
      <div className=' mt-30'>
      <Loader />
      </div>

      <div className="w-full items-center h-3/4 flex flex-col justify-center ">
        <div className="upper-text text-8xl">
        Collaborate Effectively,
        </div>
        <div className="upper-text text-8xl">
        and Beautifully.
        </div>
        <div className="upper-text text-3xl mt-10">
        DueTo provides an effective and joyful way to manage your creative projects
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>

      <div className='mr-4 mt-30'>
      </div>
  </section>
  </>
};

export default Hero;
