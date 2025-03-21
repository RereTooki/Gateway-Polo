import React from "react";
import Navbar from "./Navbar";
import intro from "../assets/videos/intro.mp4";

const Landing = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[70px] sborder-4 border-black boredr-double text-whites  relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            src={intro}
            loop
            autoPlay
            muted
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content on top of video */}
        <div className=" sborder-4 border-black gap-8 h-fit flex flex-col items-center justify-center  w-[80%] text-center relative z-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-medium text-[25px] sborder-4 ">
              Experience the Elegance & Thrill of Polo & Racing
            </h1>
            <p className="leading-6 text-[13px] tracking-[-0.5px]">
              An exclusive destination where the thrill of horse racing meets
              the grace of polo
            </p>
          </div>
          <div className="flex justify-evenly items-center gap-4 sborder-4 w-full">
            <div className="w-fit whitespace-nowrap py-[15px] px-[25px] rounded-full h-fit font-medium text-white bg-greens transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] text-xs">
              Explore Events
            </div>
            <div className="w-fit whitespace-nowrap py-[15px] px-[25px] rounded-full h-fit font-medium text-white bg-greens transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] text-xs">
              Join the Club
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
