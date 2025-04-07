import { useRef } from "react";
import AboutIntro from "./AboutIntro";
import Landing from "./Landing";
import Navbar from "./Navbar";

const AboutUs = () => {
  // Create refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const membershipRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);
  const accomodationsRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {" "}
      <div className="h-dvh sborder-4 border-black border-dotted soverflow-hidden">
        <div>
          <Navbar
            introRef={introRef}
            membershipRef={membershipRef}
            aboutMeRef={aboutMeRef}
            contactMeRef={contactMeRef}
            accomodationsRef={accomodationsRef}
          />
        </div>
        <div ref={introRef} className=" select-none h-full">
          <AboutIntro />{" "}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
