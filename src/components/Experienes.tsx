import React from "react";
import experiences1 from "../assets/images/experiences1.png";
import experiences2 from "../assets/images/experiences2.png";
import tick from "../assets/icons/tick.svg";

const Experiences = () => {
  return (
    <>
      <div className="sborder-4 border-black pt-16 flex flex-col sitems-center px-4 gap-6">
        <div className="border-[1px] w-fit self-center p-4 rounded-[20px] text-[#B79D52] font-medium text-xs drop-shadow-[3px_6px_5px_rgba(111, 181, 131, 0.8)]s drop-shadow-2xl mb-2">
          EXPERIENCES
        </div>
        <div className="border-2 w-full flex relative h-[234px] items-center">
          {" "}
          <div className="sborder-4 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-[70%] scal h-[234px] border-dotted ">
            <img
              className="w-full h-full object-covers"
              src={experiences1}
              alt="A man"
            />
          </div>
          <div className="sborder-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-[55%] h-[206px] z-10 border-black absolute right-0">
            <img
              className="w-full h-full object-covers"
              src={experiences2}
              alt="background-img"
            />
          </div>
        </div>
        <div className="sborder-4 font-medium text-greens text-xl">
          <h2>
            Where passion meets precision: Welcome to Gateway Polo and
            Racecourse
          </h2>
        </div>
        <div className="sborder-4 font-medium text-greens text-xs tracking-tighter text-justify">
          <p>
            Step into a world where elegance meets excitement at Gateway
            Racecourse. Whether you crave the electrifying rush of horse racing,
            the strategic grace of polo, or the refined charm of luxury
            hospitality, every moment here is crafted to perfection. From
            world-class facilities to exclusive events, we invite you to immerse
            yourself in an unparalleled experience that blends sport, leisure,
            and prestige like never before. Your unforgettable journey begins
            here.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="sborder-2 flex items-center gap-4 font-medium text-greens text-xs tracking-tighter p-4 rounded-[10px] w-full shadow-lg">
            <div className="sborder-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-[24px] h-[24px]">
              <img
                className="w-full h-full object-covers"
                src={tick}
                alt="background-img"
              />
            </div>
            <p className="sborder-2">Premier Equestrian Events</p>
          </div>
          <div className="sborder-2 flex items-center gap-4 font-medium text-greens text-xs tracking-tighter p-4 rounded-[10px] w-full shadow-lg">
            <div className="sborder-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-[24px] h-[24px]">
              <img
                className="w-full h-full object-covers"
                src={tick}
                alt="background-img"
              />
            </div>
            <p className="sborder-2">Luxury & Comfort</p>
          </div>
          <div className="sborder-2 flex items-center gap-4 font-medium text-greens text-xs tracking-tighter p-4 rounded-[10px] w-full shadow-lg">
            <div className="sborder-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-[24px] h-[24px]">
              <img
                className="w-full h-full object-covers"
                src={tick}
                alt="background-img"
              />
            </div>
            <p className="sborder-2">Upscale dining setting</p>
          </div>
          <div className="sborder-2 flex items-center gap-4 font-medium text-greens text-xs tracking-tighter p-4 rounded-[10px] w-full shadow-lg">
            <div className="sborder-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-[24px] h-[24px]">
              <img
                className="w-full h-full object-covers"
                src={tick}
                alt="background-img"
              />
            </div>
            <p className="sborder-2">Fine Dining & Hospitality</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
