import React from "react";
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
  const contactInfo = [
    { icon: <FaPhone />, text: "+234 802 626 8181" },
    { icon: <FaEnvelope />, text: "Info@gatewaypolo.ng" },
    { icon: <FaMapMarkerAlt />, text: "Second tier OPIC HOUSE, KM" },
  ];
  return (
    <>
      <div className="sborder-4 border-black pt-16 flex flex-col items-center px-4 gap-6 text-greens text-center ">
        {" "}
        {/* Header */}
        <h2 className="text-lg font-semibold text-greens lg:text-xl xl:text-2xl">
          Contact Us
        </h2>
        {/* Contact Details */}
        <div className="flex flex-col lg:flex-row gap-4">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700">
              <span className="text-lg text-[#B79D52]">{item.icon}</span>
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
        {/* Social Media Icons */}
        <div className="flex gap-6 text-[#B79D52] text-xl">
          <FaInstagram />
          <FaLinkedin />
          <FaTwitter />
          <FaFacebook />
        </div>
        {/* Reservation Button */}
        <button className="flex items-center gap-2 border-[1px] border-[#B79D52] px-6 py-3 rounded-md text-sm text-greens">
          📅 Reserve a piece of Nature
        </button>
        {/* Footer */}
        <div className="text-xs text-gray-500 mt-6">
          <p>Nigeria’s most desirable Country Home</p>
          <p>© 2025 Gateway Lagos | Powered by LandWey</p>
        </div>
        {/* Chat Support Button */}
        <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-xs text-greens border-[#B79D52] mt-4">
          Instant chat support to get started{" "}
          <FaWhatsapp className="text-green-600 text-lg" />
        </button>
      </div>
    </>
  );
};

export default ContactUs;
