import React from "react";
import logo from "../assets/icons/logo.svg";
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

const ContactUs = () => {
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
    { icon: <FaPhone />, text: "+234 802 626 8181" },
    { icon: <FaEnvelope />, text: "Info@gatewaypolo.ng" },
    { icon: <FaMapMarkerAlt />, text: "Second tier OPIC HOUSE, KM" },
  ];
  return (
    <>
      <div className="sborder-4  border-double border-black pt-24 flex flex-col lg:flex-row lg:justify-center items-center lg:items-start px-4 lg:px-12 gap-6 text-greens text-center lg:gap-16">
        {" "}
        {/* Header */}
        <div className="sborder-4 flex flex-col gap-4 w-full md:w-[80%] border-black lg:mb-24 items-center lg:w-fit">
          <h2 className="text-xl font-semibold text-greens lg:text-2xl xl:text-3xl mb-2">
            Contact Us
          </h2>
          {/* Contact Details */}
          <div className="flex flex-col lg:flex-rows gap-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-700"
              >
                <span className="text-lg text-[#B79D52]">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
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
            <button className="flex items-center gap-2 border-[1px] border-[#B79D52] px-6 py-3 rounded-md text-sm text-greens w-fit self-center">
              📅 Reserve a piece of Nature
            </button>
            <div className="sborder-2 border-black h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-full lg:w-24 h-24 self-center lg:hidden">
              <img
                className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
                src={logo}
                alt="background-img"
              />
              <p className="text-xs text-[#B79D52] whitespace-nowrap text-center self-center">
                GATEWAY POLO CLUB & RACECOURSE
              </p>
            </div>
          </div>
          {/* Footer */}
          <div className="text-xs text-gray-500 mt-6 mb-14 lg:mb-0 lg:mt-0">
            <p>Nigeria’s most desirable Country Home</p>
            <p>© 2025 Gateway Lagos | Powered by LandWey</p>
          </div>
        </div>
        <div className="lg:w-fit sborder-2 hidden lg:block">
          <div className="sborder-2 border-black h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-48  h-36 self-center ">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
              src={logo}
              alt="background-img"
            />
          </div>
          <p className="text-xs text-[#B79D52]">
            GATEWAY POLO CLUB & RACECOURSE
          </p>
        </div>
        {/* Chat Support Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-md text-xs text-greens border-[#B79D52] mt-4 fixed bottom-4 animate-pulses backdrop-blur-md backdrop-invert text-greens mix-blend-differences bg-white/50 z-40 lg:right-4"
          onClick={handleWhatsAppClick}
        >
          Instant chat support to get started{" "}
          <FaWhatsapp className="text-green-600 text-lg" />
        </button>
      </div>
    </>
  );
};

export default ContactUs;
