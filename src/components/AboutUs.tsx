import React from "react";
import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";

const AboutUs = () => {
  return (
    <>
      <div className="sborder-4 border-black pt-16 flex flex-col sitems-center px-4 gap-6">
        <div className="border-[1px] w-fit self-center p-4 rounded-[20px] text-[#B79D52] font-medium text-xs drop-shadow-[3px_6px_5px_rgba(111, 181, 131, 0.8)]s drop-shadow-2xl mb-2">
          ABOUT
        </div>
        <div className="border-4 w-full flex relative h-[234px] items-center">
          {" "}
          <div className="sborder-4 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-[55%] h-[206px] z-10 border-dotted ">
            <img
              className="w-full h-full object-covers"
              src={about1}
              alt="A man"
            />
          </div>
          <div className="sborder-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-[70%] scal h-[234px] sright-8 border-black absolute right-0">
            <img
              className="w-full h-full object-covers"
              src={about2}
              alt="background-img"
            />
          </div>
        </div>
        <div className="border-4 font-medium text-greens text-xl">
          <h2>Discover the ultimate Equestrian destination</h2>
        </div>
        <div className="border-4 font-medium text-greens text-xs tracking-tighter text-justify">
          <p>
            Imagine a destination where the thrill of horse racing meets the
            grace of polo, set against the breathtaking backdrop of lush
            greenery and world-class facilities. Welcome to Gateway Racecourse—a
            premier hub for leisure, entertainment, and equestrian excellence
          </p>
        </div>
        <div className="border-[1px] border-[#B79D52] font-medium text-greens text-xs p-4 rounded-[10px] w-fit">
          Join the Experience
        </div>
      </div>
    </>
  );
};

export default AboutUs;
