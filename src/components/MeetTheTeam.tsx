import React, { useEffect, useRef } from "react";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import team4 from "../assets/images/team4.png";
import team5 from "../assets/images/team5.png";
import team6 from "../assets/images/team6.png";
import team7 from "../assets/images/team7.png";
import team8 from "../assets/images/team8.png";
import partner1 from "../assets/icons/partner1.svg";
import partner2 from "../assets/icons/partner2.svg";
import partner3 from "../assets/icons/partner3.svg";
import partner4 from "../assets/icons/partner4.svg";
import partner5 from "../assets/icons/partner5.svg";
import ComingSoon from "./ComingSoon";

type TeamMember = {
  name: string;
  title: string;
  image: string;
  linkedin: string;
};

const team: TeamMember[] = [
  {
    name: "Olawale Folami",
    title: "Executive Director",
    image: team1,
    linkedin: "#",
  },
  {
    name: "Otunba Kayode Adebayo",
    title: "Executive Director",
    image: team4,
    linkedin: "#",
  },
  {
    name: "Dolapo Ogunbambo",
    title: "Chief Marketing Officer",
    image: team3,
    linkedin: "#",
  },

  {
    name: "Oluwatomisin Williams",
    title: "Chief Operations Officer",
    image: team5,
    linkedin:
      "https://www.linkedin.com/m/profile/in/tomisin-williams-19396b176",
  },
  {
    name: "Barr. Adeyemi Abraham",
    title: "Secretary/Legal Adviser",
    image: team6,
    linkedin: "#",
  },
  {
    name: "Lekan Ajayi FCA",
    title: "Head of Finance",
    image: team7,
    linkedin: "#",
  },
  {
    name: "Princess Olapeju",
    title: "Executive Director",
    image: team8,
    linkedin: "#",
  },
];

type Partner = {
  name: string;
  logo: string;
};

const partners: Partner[] = [
  { name: "Bet9ja", logo: partner1 },
  { name: "FCMB", logo: partner2 },
  { name: "Rite", logo: partner3 },
  { name: "Bamboo", logo: partner4 },
  { name: "Nigerian Equestrian Federation", logo: partner5 },
  // Add more logos as needed
];

const MeetTheTeam = () => {
  return (
    <>
      <div className="bg-greens sh-screen text-greens px-4 tab:px-8 xxl:px-16 py-12 xxl:py-16 ">
        <div
          className="gap-6 xl:gap-10s flex flex-col items-center text-white"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="sborder-4 font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:px-0 px-8 pb-8s">
            <h2>Meet The Gateway Team</h2>
          </div>
          <div>
            {" "}
            <p className="text-center text-sm tab:text-base lg:text-lg sxl:text-lg sborder-2 xmd:px-32 ">
              Get to Know the Experts Behind Gateway's Unmatched Excellence
            </p>
          </div>
        </div>
        <div
          className="overflow-x-scroll whitespace-nowrap snap-x snap-mandatory px-4 pb-4 bg-green-950s my-12 tab:mb-16 "
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="flex gap-4 w-max ">
            {team.map((member, index) => (
              <div
                key={index}
                className="snap-start min-w-[250px] max-w-[250px] bg-white rounded-xl overflow-hidden shadow-md "
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]"
                />
                <div className="p-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-700">{member.title}</p>
                  <a
                    href={member.linkedin}
                    className="inline-block mt-3 bg-green-900 text-white text-sm px-4 py-1 rounded-md"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="sborder-2 gap-6 xl:gap-10s flex flex-col items-center text-white mb-10"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="sborder-4 font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:px-0 px-8 pb-8s">
            <h2>Partners</h2>
          </div>
        </div>
        <section
          className="bg-green-950s px-4 tabImg:flex flex-col items-center sborder-2 mb-12 tab:mb-16"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="overflow-x-auto whitespace-nowrap snap-x snap-mandatory">
            <div className="flex items-center gap-6 w-max">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="snap-start flex flex-col items-center sborder-4 min-w-[80px]"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-14 h-14 object-contain"
                  />
                  <span className="text-white text-xs mt-1 text-center whitespace-normal">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ComingSoon />
      </div>
    </>
  );
};

export default MeetTheTeam;
