import React from "react";
import { useRef } from "react";
import Navbar from "./Navbar";
import Training from "./Training";
import ContactUs from "./ContactUs";
import MeetTheTeam from "./MeetTheTeam";
import MemberIntro from "./MemberIntro";

const Membership = () => {
  // Create refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const membershipRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);
  const accomodationsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {" "}
      <div className="sborder-4 border-black border-dotted soverflow-hidden">
        <div>
          <Navbar
            introRef={introRef}
            membershipRef={membershipRef}
            aboutMeRef={aboutMeRef}
            contactMeRef={contactMeRef}
            accomodationsRef={accomodationsRef}
          />
        </div>
        <div className=" select-none h-full">
          <MemberIntro />{" "}
        </div>
        <div className=" select-none h-full">
          <Training />{" "}
        </div>
        <div className=" select-none h-full">
          <MeetTheTeam />
        </div>
        <div className=" select-none h-full">
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default Membership;
