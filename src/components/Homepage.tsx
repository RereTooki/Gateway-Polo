import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Landing from "./Landing";
import AboutUs from "./AboutUs";

const Homepage = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Landing />
      <AboutUs />
    </>
  );
};

export default Homepage;
