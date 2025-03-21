import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import Experienes from "./Experienes";
import WhyUs from "./WhyUs";
import ComingSoon from "./ComingSoon";
import FAQ from "./FAQ";

const Homepage = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Landing />
      <AboutUs />
      <Experienes />
      <WhyUs />
      <ComingSoon />
      <FAQ />
    </>
  );
};

export default Homepage;
