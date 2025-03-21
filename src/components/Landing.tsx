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
        <div
          className=" sborder-4 border-black gap-8 h-fit flex flex-col items-center justify-center  w-[80%] lg:w-[70%] text-center relative z-10"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col lg:gap-2">
              <h1 className="font-medium text-[25px] lg:text-4xl xl:text-6xl lg:sborder-4">
                Experience the Elegance &
              </h1>
              <h1 className="font-medium text-[25px] lg:text-4xl xl:text-6xl lg:sborder-4">
                Thrill of Polo & Racing
              </h1>
            </div>
            <p className="leading-6 text-[13px] lg:text-lg xl:text-2xls tracking-[-0.5px] px-6">
              An exclusive destination where the thrill of horse racing meets
              the grace of polo
            </p>
          </div>
          <div className="flex justify-evenly items-center gap-4 sborder-4 w-full">
            <div className="w-fit whitespace-nowrap py-[15px] px-[25px] rounded-full h-fit font-medium text-white bg-greens transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] text-xs lg:px-10 lg:text-base xl:text-lg">
              Explore Events
            </div>
            <div className="w-fit whitespace-nowrap py-[15px] px-[25px] rounded-full h-fit font-medium text-white bg-greens transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] text-xs lg:px-10 lg:text-base xl:text-l">
              Join the Club
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
