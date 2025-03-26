import React from "react";
import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="sborder-4 border-black pt-16 pb-10 lg:pb-6 flex flex-col lg:flex-row  items-center justify-center px-4 gap-6 overflow-y-hiddden">
        <div
          className="border-[1px] w-fit self-center p-4 rounded-[20px] text-[#B79D52] font-medium text-xs lg:text-base drop-shadow-[3px_6px_5px_rgba(111, 181, 131, 0.8)]s drop-shadow-2xl mbs-2 selection:text-white selection:bg-black/80 "
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          ABOUT
        </div>{" "}
      </div>{" "}
      <div className="sborder-4 border-black pb-6 lg:pb-0 flex flex-col lg:flex-row-reverse  items-center justify-center px-4 lg:px-10 gap-8 lg:gap-6">
        <div className="border-4 w-full flex relative h-[60vw] max-h-[60vh] lg:max-h-none lg:h-[70vh]     lg:w-1/2  items-center max-w-[500px] lg:max-w-none  select-none">
          {" "}
          <div className="border-4 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] w-[60%] h-[206px]s max-w-[200px]s lg:max-w-none h-[65%] max-h-[200px] lg:w-[65%] z-10 border-dotted overflow-hidden ">
            <img
              className="w-full h-full object-covers "
              src={about1}
              alt="A man"
            />
          </div>
          <div className="border-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] w-[70%] max-w-[280px]s lg:max-w-none scal h-full lg:w-[80%] lg:h-[70vh] sright-8 border-black absolute right-0">
            <img
              className="w-full h-full object-covers"
              src={about2}
              alt="A man riding a horse"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 tab:px-4 sborder-4 border-black lg:w-1/2 selection:text-white selection:bg-black/80 ">
          <div
            className="sborder-4 font-medium text-greens text-2xl tab:text-2xl xl:text-3xl"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h2>Discover The Ultimate Equestrian Destination</h2>
          </div>
          <div
            className="sborder-4 font-medium text-greens text-sm tracking-tighter text-justify tab:text-sm lg:text-base xl:text-lg"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <p>
              Imagine a destination where the thrill of horse racing meets the
              grace of polo, set against the breathtaking backdrop of lush
              greenery and world-class facilities. Welcome to Gateway
              Racecourse—a premier hub for leisure, entertainment, and
              equestrian excellence
            </p>
          </div>
          <div
            className="border-[1px] border-[#B79D52] font-medium text-greens text-xs p-4 rounded-[10px] w-fit tab:text-sm  sanimate-pulse self-center transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04]"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <Link to="/joinUs">Join The Experience</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
