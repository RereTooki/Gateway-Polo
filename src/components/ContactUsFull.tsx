import React from "react";
import intro from "../assets/videos/intro.mp4";

import logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUsFull = () => {
  /*New Additions */

  const email = "Info@gatewaypolo.ng"; // Replace with the recipient's email address

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const phoneNumber = "+2348026268181"; // Replace with the recipient's phone number
  const message = encodeURIComponent(
    "Hello Gateway Polo, I'll love to join you!"
  ); // Encode message

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const contactInfo = [
    { icon: <FaPhone color="#B79D52" />, text: "+234 802 626 8181" },
    { icon: <FaEnvelope color="#B79D52" />, text: "Info@gatewaypolo.ng" },
    {
      icon: <FaMapMarkerAlt color="#B79D52" />,
      text: "Second tier OPIC HOUSE, KM",
    },
  ];

  return (
    <>
      {" "}
      <div className="text-3xl h-dvh flex flex-col items-center justify-center font-bold text-white usnderline text-center poppinsFont border-4 select-none">
        {" "}
        <div className="absolute inset-0 w-full h-full">
          <video
            src={intro}
            muted
            loop
            autoPlay
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black/50"></div>{" "}
        </div>
        <div className="relative flex flex-col divide-y divide-white">
          <h1 className="text-6xl tab:text-8xl">Contact Us</h1>

          {/* New Additions */}
          <div
            className="sborder-4  border-double border-black pt-8 flex flex-col lg:flex-row lg:justify-center items-center lg:items-start px-4 lg:px-12 gap-6 text-white text-center lg:gap-16"
            data-aoss="fade-up"
            data-aos-duration="1200"
          >
            {" "}
            {/* Header */}
            <div className="sborder-4 flex flex-col gap-4 w-full md:w-[80%] border-black lg:mb-24 items-center lg:w-fit">
              {/* <h2 className="text-xl font-semibold text-white lg:text-2xl xl:text-3xl mb-2">
                  Contact Us
                </h2> */}
              {/* Contact Details */}
              <div className="flex flex-col lg:flex-rows gap-4 text-white">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="text-lg ">{item.icon}</span>
                    <span className="text-sm text-white">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="sborder-2 border-black lg:mb-16 w-full lg:w-fit md:w-[80%] flex flex-col gap-4">
              <div className="sborder-4 flex flex-col gap-4 items-centser ">
                <div className="flex gap-6 text-[#B79D52] text-xl self-center">
                  <FaInstagram
                    color="#fff"
                    className="p-2 h-10 w-10 bg-[#B79D52] rounded-full"
                  />
                  <FaLinkedin
                    color="#fff"
                    className="p-2 h-10 w-10 bg-[#B79D52] rounded-full"
                  />
                  <FaTwitter
                    color="#fff"
                    className="p-2 h-10 w-10 bg-[#B79D52] rounded-full"
                  />
                  <FaFacebook
                    color="#fff"
                    className="p-2 h-10 w-10 bg-[#B79D52] rounded-full"
                  />
                </div>
                {/* Reservation Button */}
                <button className="flex items-center gap-2 border-[1px] border-[#B79D52] px-6 py-3 rounded-md text-sm w-fit self-center">
                  <Link to="/joinUs"> 📅 Reserve a piece of Nature</Link>
                </button>
              </div>
            </div>
            <div className="lg:w-fit sborder-2 hidden lg:block relative bottom-4">
              <div className="sborder-2 border-black h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-full flex justify-center  h-28 self-center ">
                <img
                  className="w-36 h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
                  src={logo}
                  alt="background-img"
                />
              </div>
              <p className="text-xs text-[#B79D52]">
                GATEWAY POLO CLUB & RACECOURSE
              </p>
            </div>
            {/* Chat Support Button */}
          </div>
          <button
            className="flex items-center justify-center gap-2 p-2 spy-2 rounded-full text-xs text-greens border-[#B79D52] mt-4 fixed bottom-4 animate-pulses backdrop-blur-md backdrop-invert text-greens mix-blend-differences bg-greens/50 z-40 right-2 md:right-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] h-12 w-12 z-10"
            onClick={handleWhatsAppClick}
          >
            {/* Instant chat support to get started{" "} */}
            <FaWhatsapp color="#fff" className=" h-8 w-8 border-2s" />
          </button>
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

export default ContactUsFull;
