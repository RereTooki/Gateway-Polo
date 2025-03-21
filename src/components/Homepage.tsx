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
  return (
    <>
      {" "}
      <Navbar
        introRef={introRef}
        projectsRef={projectsRef}
        aboutMeRef={aboutMeRef}
        contactMeRef={contactMeRef}
      />
      <Landing />
      <div ref={aboutMeRef} className="scroll">
        <AboutUs />
      </div>
      <Experienes />
      <WhyUs />
      <ComingSoon />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default Homepage;
