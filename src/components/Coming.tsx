import React from "react";
import intro from "../assets/videos/intro.mp4";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";

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
      <div className="text-3xl h-dvh flex flex-col items-center justify-center font-bold text-white usnderline text-center poppinsFont border-4 select-none">
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
          <h4 className="text-lg xl:text-xl mt-4 pt-2">
            Please Fill{" "}
            <span className="italic underline underline-offset-4 ">
              <a
                className=""
                href="https://docs.google.com/forms/d/e/1FAIpQLSdHYyeiA1x2Kgpbbo3T-zFl_h29FaU_aQfis8JyAsCV6CSOLg/viewform?usp=header"
                target="_blank"
              >
                This Form{" "}
              </a>
            </span>
          </h4>
        </div>
        <button
          className="flex items-center justify-center gap-2 p-2 spy-2 rounded-full text-xs text-greens border-[#B79D52] mt-4 fixed bottom-4 animate-pulses backdrop-blur-md backdrop-invert text-greens mix-blend-differences bg-greens/50 z-40 right-2 md:right-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] h-12 w-12 z-10"
          onClick={handleWhatsAppClick}
        >
          {/* Instant chat support to get started{" "} */}
          <FaWhatsapp color="#fff" className=" h-8 w-8 border-2s" />
        </button>
        <div className="sborder-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] fixed top-4 w-24 h-24 lg:w-36 lg:h-36">
          <Link to="/">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
              src={logo}
              alt="background-img"
            />
          </Link>
        </div>
      </div>{" "}
    </>
  );
};

export default Coming;
