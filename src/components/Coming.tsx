import React from "react";
import intro from "../assets/videos/intro.mp4";
import { FaWhatsapp } from "react-icons/fa";

const Coming = () => {
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
          className="flex items-center gap-2 px-4 py-2 border rounded-md text-xs text-white border-[#B79D52] mt-4 fixed bottom-4 animate-pulse"
          onClick={handleWhatsAppClick}
        >
          Instant chat support to get started{" "}
          <FaWhatsapp className="text-green-600 text-lg" />
        </button>
      </div>{" "}
    </>
  );
};

export default Coming;
