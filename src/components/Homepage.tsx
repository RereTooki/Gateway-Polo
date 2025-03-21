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
      <Navbar
        introRef={introRef}
        projectsRef={projectsRef}
        aboutMeRef={aboutMeRef}
        contactMeRef={contactMeRef}
        FAQRef={FAQRef}
      />
      <div ref={introRef} className="scroll select-none">
        <Landing />{" "}
      </div>
      <div ref={aboutMeRef} className="scroll select-none">
        <AboutUs />
      </div>
      <div ref={projectsRef} className="scroll select-none">
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
