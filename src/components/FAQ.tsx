import React from "react";
import map1 from "../assets/icons/Map.svg";

const FAQ = () => {
  const faqItems = [
    "What is Gateway Racecourse?",
    "Where is Gateway Racecourse located?",
    "How can I buy tickets for events?",
    "Do you offer memberships?",
    "What amenities are available at Gateway Racecourse?",
    "Can I host private events at Gateway Racecourse?",
    "Is there parking available?",
    "How can I contact Gateway Racecourse for more information?",
  ];

  return (
    <>
      <div className="sborder-4 border-black pt-16 flex flex-col items-center px-4 gap-6 text-greens">
        <div className="border-[1px] w-fit self-center p-4 rounded-[20px] text-[#B79D52] font-medium text-xs drop-shadow-[3px_6px_5px_rgba(111, 181, 131, 0.8)]s drop-shadow-2xl mb-2">
          FAQ
        </div>
        {/* FAQ List */}
        <div className="flex flex-col gap-4 w-full">
          {faqItems.map((question, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-[1px] border-[#B79D52] rounded-lg px-4 py-3 shadow-lg  bg-white gap-2"
            >
              <span className="text-sm">{question}</span>
              <span className="text-xl font-bold text-[#B79D52]">+</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sborder-2 pt-16 h-dvh">
        <img
          className="w-full h-full object-cover drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
          src={map1}
          alt="Gateway's Map"
        />
      </div>
    </>
  );
};

export default FAQ;
