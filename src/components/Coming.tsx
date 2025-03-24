import React from "react";
import intro from "../assets/videos/intro.mp4";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/icons/logo.svg";

const Coming = () => {
  const phoneNumber = "+2348026268181"; // Replace with the recipient's phone number
  const message = encodeURIComponent(
    "Hello Gateway Polo, I'll love to join you!"
  ); // Encode message

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <>
      {" "}
      <div className="text-3xl h-dvh flex flex-col items-center justify-center font-bold text-white usnderline text-center poppinsFont border-4">
        {" "}
        <div className="absolute inset-0 w-full h-full">
          <video
            src={intro}
            loop
            autoPlay
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black/50"></div>{" "}
        </div>
        <div className="relative flex flex-col divide-y">
          <h1 className="text-6xl tab:text-8xl">Join Us</h1>
          <h4 className="text-lg mt-4">Coming Soon</h4>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-md text-xs text-greens border-[#B79D52] mt-4 fixed bottom-4 animate-pulses backdrop-blur-md backdrop-invert text-greens mix-blend-differences bg-white/50 z-40 md:right-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04]"
          onClick={handleWhatsAppClick}
        >
          Instant chat support to get started{" "}
          <FaWhatsapp className="text-green-600 text-lg" />
        </button>
        <div className="sborder-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] fixed top-4 w-24 h-24 lg:w-36 lg:h-36">
          <img
            className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
            src={logo}
            alt="background-img"
          />
        </div>
      </div>{" "}
    </>
  );
};

export default Coming;
