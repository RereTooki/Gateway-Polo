import React, { useRef } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import Experienes from "./Experienes";
import WhyUs from "./WhyUs";
import ComingSoon from "./ComingSoon";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";

const Homepage = () => {
  // Create refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);
  const FAQRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {" "}
      <div className="h-dvh sborder-4 border-black border-dotted overflow-hidden">
        <div>
          <Navbar
            introRef={introRef}
            projectsRef={projectsRef}
            aboutMeRef={aboutMeRef}
            contactMeRef={contactMeRef}
            FAQRef={FAQRef}
          />
        </div>
        <div ref={introRef} className="scroll select-none h-full">
          <Landing />{" "}
        </div>
      </div>
      <div ref={aboutMeRef} className="scroll ">
        <AboutUs />
      </div>
      <div ref={projectsRef} className="scroll overflow-x-hidden ">
        <Experienes />
      </div>
      <WhyUs />
      <ComingSoon />
      <div ref={FAQRef} className="scroll select-none">
        <FAQ />{" "}
      </div>
      <div ref={contactMeRef} className="scroll select-none">
        <ContactUs />{" "}
      </div>
    </>
  );
};

export default Homepage;
