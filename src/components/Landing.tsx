import React from "react";
import Navbar from "./Navbar";
import intro from "../assets/videos/newintro.mp4";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[40px] sborder-4 border-black/40 boredr-double text-whites  relative w-full h-full sborder-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            src={intro}
            loop
            autoPlay
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content on top of video */}
        <div className="sborder-4 border-black gap-6 h-fit flex flex-col items-center justify-center  w-[80%] lg:w-[70%] text-center relative z-10">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col lg:gap-2">
              <h1
                className="font-medium text-[35px] leading-[45px] tab:text-4xl lg:text-5xl xl:text-6xl tab:leading-[45px] lg:leading-[60px] xl:leading-[70px]  lg:sborder-4"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                Experience the Elegance & Thrill of Polo & Racing
              </h1>
              {/* <h1 className="font-medium text-[25px] lg:text-4xl xl:text-6xl lg:sborder-4">
                Thrill of Polo & Racing
              </h1> */}
            </div>
            <p
              className="sborder-4 leading-6 text-[13px] tab:text-[14px] lg:text-lg xl:text-2xl tracking-[-0.5px] px-6 tab:px-24"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              An exclusive destination where the thrill of horse racing meets
              the grace of polo
            </p>
          </div>
          <div className="flex justify-evenly items-center gap-4 sborder-4 w-full">
            {" "}
            <Link to="/aboutUs">
              <div className="w-fit whitespace-nowrap py-[15px] lg:py-4 px-[18px] rounded-full h-fit font-medium text-white bg-greens transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] text-xs lg:px-8 xl:px-10 tab:text-sm xl:text-xl w-1/2 max-w-[152px] lg:max-w-none lg:w-auto w3-animate-zoom">
                About Us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
