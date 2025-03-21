import React from "react";
import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";

const AboutUs = () => {
  return (
    <>
      <div className="sborder-4 border-black pt-16 pb-6 flex flex-col lg:flex-row  items-center justify-center px-4 gap-6">
        <div className="border-[1px] w-fit self-center p-4 rounded-[20px] text-[#B79D52] font-medium text-xs lg:text-base drop-shadow-[3px_6px_5px_rgba(111, 181, 131, 0.8)]s drop-shadow-2xl mb-2 ">
          ABOUT
        </div>{" "}
      </div>{" "}
      <div className="border-4 border-black pb-6 flex flex-col lg:flex-row-reverse  items-center justify-center px-4 gap-6">
        <div className="border-4 w-full flex relative h-[234px] lg:h-[70vh] lg:w-1/2  items-center">
          {" "}
          <div className="sborder-4 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-[55%] h-[206px] lg:h-[80%] lg:w-[65%] z-10 border-dotted ">
            <img
              className="w-full h-full object-covers"
              src={about1}
              alt="A man"
            />
          </div>
          <div className="sborder-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-[70%] scal h-[234px] lg:w-[80%] lg:h-[70vh] sright-8 border-black absolute right-0">
            <img
              className="w-full h-full object-covers"
              src={about2}
              alt="background-img"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 border-4 border-black lg:w-1/2 ">
          <div className="border-4 font-medium text-greens text-xl lg:text-2xl">
            <h2>Discover the ultimate Equestrian destination</h2>
          </div>
          <div className="border-4 font-medium text-greens text-xs tracking-tighter text-justify lg:text-base">
            <p>
              Imagine a destination where the thrill of horse racing meets the
              grace of polo, set against the breathtaking backdrop of lush
              greenery and world-class facilities. Welcome to Gateway
              Racecourse—a premier hub for leisure, entertainment, and
              equestrian excellence
            </p>
          </div>
          <div className="border-[1px] border-[#B79D52] font-medium text-greens text-xs p-4 rounded-[10px] w-fit lg:text-sm animate-pulse lg:self-center">
            Join the Experience
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
