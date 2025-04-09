import React, { useEffect, useRef } from "react";

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
    image: "/team1.jpg",
    linkedin: "#",
  },
  {
    name: "Otunba Kayode Adebayo",
    title: "Executive Director",
    image: "/team2.jpg",
    linkedin: "#",
  },
  {
    name: "Dolapo Ogunbambo",
    title: "Chief marketing officer",
    image: "/team3.jpg",
    linkedin: "#",
  },
  {
    name: "Dolapo Ogunbambo",
    title: "Chief marketing officer",
    image: "/team3.jpg",
    linkedin: "#",
  },
  {
    name: "Dolapo Ogunbambo",
    title: "Chief marketing officer",
    image: "/team3.jpg",
    linkedin: "#",
  },
  {
    name: "Dolapo Ogunbambo",
    title: "Chief marketing officer",
    image: "/team3.jpg",
    linkedin: "#",
  },
  // ...add up to 10 members
];

const MeetTheTeam = () => {
  return (
    <>
      <div className="bg-greens sh-screen text-white px-4 tab:px-8 xxl:px-16 py-12 xxl:py-16 ">
        <div className="gap-6 xl:gap-10s flex flex-col items-center">
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
        <div className="overflow-x-auto whitespace-nowrap snap-x snap-mandatory px-4 py-8 bg-green-950 mt-12">
          <div className="flex gap-4 w-max">
            {team.map((member, index) => (
              <div
                key={index}
                className="snap-start min-w-[250px] max-w-[250px] bg-white rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
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
      </div>
    </>
  );
};

export default MeetTheTeam;
