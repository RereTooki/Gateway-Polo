import React from "react";
import why1 from "../assets/images/why1.png";
import why2 from "../assets/images/why2.png";
import why3 from "../assets/images/why3.png";
import tick from "../assets/icons/tick.svg";

const WhyUs = () => {
  return (
    <>
      <div className="border-4 border-black pt-16 flex flex-col items-center px-4 lg:px-10  gap-6 text-greens selection:text-white selection:bg-black/80">
        <div
          className="border-[1px] w-fit self-center p-4 rounded-[20px] text-[#B79D52] font-medium  lg:text-base text-xs drop-shadow-[3px_6px_5px_rgba(111, 181, 131, 0.8)]s drop-shadow-2xl mb-2"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          WHY US ?
        </div>
        <div className="flex gap-4 flex-col">
          <div
            className="sborder-2 font-medium text-xl tab:text-2xl xl:text-3xl text-center w-full"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h2> Why Choose Gateway Racecourse?</h2>
          </div>
          <div
            className="sborder-2 font-medium text-xs tab:text-sm lg:text-base xl:text-lg text-center lg:px-12"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <p>
              Experience prestige, thrilling events, and world-class hospitality
              like never before
            </p>
          </div>
        </div>
        <div className="mt-2 sborder-4  border-black flex flex-col lg:flex-row lg:gap-4 gap-8 ">
          <div
            className="border-2s rounded-[10px] flex flex-col gap-10 shadow-lg transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] "
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="sborder-4  h-[290px] border-dotted rounded-[10px] select-none">
              <img
                className="w-full h-full lg:object-cover rounded-[10px] xxl:object-fill"
                src={why1}
                alt="A man riding a horse"
              />
            </div>
            <div className="flex flex-col sborder-4 gap-2 lg:gap-4 mb-8 px-3">
              <h2 className="text-xl lg:text-xl xl:text-2xl font-semibold">
                {" "}
                Thrilling Horse Races
              </h2>
              <p className="font-medium text-xs lg:text-sm xl:text-base lg:tracking-normal tracking-tighter">
                Experience the adrenaline rush as powerful steeds thunder down
                the track in heart-pounding races!
              </p>
            </div>
          </div>
          <div
            className="border-2s rounded-[10px] flex flex-col gap-8 shadow-lg transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04]"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="sborder-4  h-[290px] border-dotted rounded-[10px] select-none">
              <img
                className="w-full h-full lg:object-cover rounded-[10px] xxl:object-fill"
                src={why2}
                alt="An artiste"
              />
            </div>
            <div className="flex flex-col sborder-4 gap-2 lg:gap-4 mb-8 px-3">
              <h2 className="text-xl lg:text-xl xl:text-2xl font-semibold">
                {" "}
                Unmatched VIP Experience
              </h2>
              <p className="font-medium text-xs lg:text-sm xl:text-base lg:tracking-normal tracking-tighter">
                Indulge in exclusive luxury, premium hospitality, and front-row
                access to elite equestrian events!
              </p>
            </div>
          </div>{" "}
          <div
            className="border-2s rounded-[10px] flex flex-col gap-8 shadow-lg transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04]"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="sborder-4  h-[290px] border-dotted rounded-[10px] select-none">
              <img
                className="w-full h-full lg:object-cover rounded-[10px] xxl:object-fill"
                src={why3}
                alt="Men riding horses"
              />
            </div>
            <div className="flex flex-col sborder-4 gap-2 lg:gap-4 mb-8 px-3">
              <h2 className="text-xl lg:text-xl xl:text-2xl font-semibold">
                {" "}
                Prestigious Polo Events
              </h2>
              <p className="font-medium text-xs lg:text-sm xl:text-base lg:tracking-normal tracking-tighter">
                Witness the elegance and intensity of world-class polo in a
                setting of pure prestige.
              </p>
            </div>
          </div>
        </div>
        <div
          className="border-[1px] border-[#B79D52] font-medium text-greens text-xs p-4 mt-16 rounded-[10px] w-fit tab:text-sm  sanimate-pulse self-center transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          Book Your Visit Now
        </div>
      </div>
    </>
  );
};

export default WhyUs;
