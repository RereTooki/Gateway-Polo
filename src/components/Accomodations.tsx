import React from "react";
import Coming from "./Coming";
import AccIntro from "./AccIntro";
import { useRef } from "react";
import Navbar from "./Navbar";

const Accomodations = () => {
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
          <AccIntro />{" "}
        </div>
      </div>
    </>
  );
};

export default Accomodations;
