import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import Experienes from "./Experienes";
import WhyUs from "./WhyUs";
import ComingSoon from "./ComingSoon";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
import AlertModal from "./AlertModal";

const Homepage = () => {
  // Create refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const membershipRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);
  const accomodationsRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    setIsOpen(true);
  }, []);
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      {" "}
      <div className="h-dvh sborder-4 border-black border-dotted overflow-hidden">
        <div>
          <Navbar
            introRef={introRef}
            membershipRef={membershipRef}
            aboutMeRef={aboutMeRef}
            contactMeRef={contactMeRef}
            accomodationsRef={accomodationsRef}
          />
        </div>
        <div ref={introRef} className="scroll select-none h-full">
          <Landing />{" "}
        </div>
        <AlertModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
      {/* <div ref={aboutMeRef} className="scroll ">
        <AboutUs />
      </div>
      <div ref={membershipRef} className="scroll overflow-x-hidden ">
        <Experienes />
      </div>
      <WhyUs />
      <ComingSoon /> */}
      {/* <div ref={accomodationsRef} className="scroll select-none">
        <FAQ />{" "}
      </div>
      <div ref={contactMeRef} className="scroll select-none">
        <ContactUs />{" "}
      </div> */}
    </>
  );
};

export default Homepage;
