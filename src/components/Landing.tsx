import React from "react";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-[60px] h-dvh sborder-4 border-black boredr-double text-greens">
        <div className=" sborder-4 border-black gap-8 h-fit flex flex-col items-center justify-center  w-[80%] text-center">
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
