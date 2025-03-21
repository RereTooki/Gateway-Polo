import React from "react";
import logo from "../assets/icons/logo.svg";
import navMenu from "../assets/icons/navMenu.svg";

const Navbar = () => {
  return (
    <>
      <div className="border-b-2 px-4 flex justify-between items-center fixed top-0 w-full h-[70px]  bg-white z-[99px]">
        {" "}
        <div className="border-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] mt-2">
          <img
            className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
            src={logo}
            alt="background-img"
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="w-fit whitespace-nowrap py-[10px] px-[20px] rounded-full h-fit font-medium text-white bg-greens transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] text-xs">
            Join Now
          </div>
          <div className="sborder-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04]">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
              src={navMenu}
              alt="background-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
