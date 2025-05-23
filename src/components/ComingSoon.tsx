import React from "react";
import apple from "../assets/icons/apple.svg";
import playStore from "../assets/icons/playStore.svg";

const ComingSoon = () => {
  return (
    <>
      <div
        className="sborder-4 border-black spt-16 flex flex-col items-center px-4  lg:px-10 gap-6 text-greens "
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="sborder-4 bg-greens w-full px-8 spy-12 text-white flex flex-col items-center justify-center gap-2 lg:ap-6">
          <div className="sborder-2 flex flex-col items-center gap-6 text-center mb-4 lg:mb-0 ">
            <h3
              className="font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl"
             
             
            >
              Our Application is Coming Soon
            </h3>
            <p
              className="text-xs font-medium lg:text-sm lg:w-[70%]"
             
             
            >
              We are still building. Subscribe for updates and 20% off when we
              launch. No spam, We promise!
            </p>
          </div>
          <div
            className="sborder-2 flex flex-row items-center gap-2 text-center w-full lg:w-[70%]"
           
           
          >
            {/* Email Input and Button */}

            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full  rounded-lg text-black text-xs h-[50px]"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white p-3 w-full  rounded-lg text-xs h-[50px]">
              Join the waitlist
            </button>
          </div>
          <div
            className="sborder-2 flex flex-row items-center gap-2 text-center w-full lg:w-[70%]"
           
           
          >
            {/* Apple And PlayStore */}
            <div className=" w-full h-[50px] lg:h-[55px] sborder-2">
              <button className="text-black bg-white p-2 w-full  rounded-lg text-xs transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] flex gap-4 items-center justify-center lg:justify-center sborder-2 h-full">
                <div className="sborder-2">
                  <img
                    className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
                    src={apple}
                    alt="Apple Logo"
                  />
                </div>
                <div className="flex flex-col sborder-2 text-xs  text-start">
                  <p className="hidden xmd:block">Download on the</p>
                  <p className="font-semibold sborder-2 ">App Store</p>
                </div>
              </button>
            </div>
            <div className=" w-full h-[50px] lg:h-[55px]">
              <button className="text-black bg-white p-2 w-full  rounded-lg text-xs transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] flex gap-4 items-center justify-center lg:justify-center h-full">
                <div className="sborder-2">
                  <img
                    className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
                    src={playStore}
                    alt="Apple Logo"
                  />
                </div>
                <div className="flex flex-col sborder-2 text-xs  text-start">
                  <p className="hidden xmd:block">Get It On</p>
                  <p className="font-semibold sborder-2">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
