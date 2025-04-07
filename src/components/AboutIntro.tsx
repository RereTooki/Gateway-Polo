import React from "react";
import aboutUs1 from "../assets/images/aboutUs1.png";
import aboutUs2 from "../assets/images/aboutUs2.png";

const AboutIntro = () => {
  return (
    <>
      {" "}
      <div className="border-4 border-double border-black px-4 tab:px-8 pt-12 flex flex-col lg:flex-row gap-4 items-center justify-centers text-greens mt-[70px]">
        {" "}
        <div className="flex flex-col gap-8 border-2 lg:w-1/2">
          <div className="sborder-4 font-medium  text-2xl tab:text-4xl xl:text-3xl text-center px-8 pb-8s">
            <h2>About Gateway Polo & Racecourse</h2>
          </div>
          <div className="sborder-2 text-justify tab:text-xl pb-8s underline underline-offset-4 decoration-[0.5px] decoration-greens/80 decoration-dotted">
            Welcome to Gateway Polo and Racecourse, an exclusive membership club
            poised to become the premier destination for polo and equestrian
            enthusiasts in Ogun State, Nigeria.<br></br>
            <br></br> At Gateway Polo, we are dedicated to creating a
            distinguished environment where passion for polo and the equestrian
            lifestyle converge. Our state-of-the-art facilities are designed to
            cater to both seasoned players and newcomers, offering top-notch
            amenities and a vibrant community. <br></br>
            <br></br>Beyond the sport, Gateway Polo and Racecourse serves as a
            social hub, fostering connections among individuals who share a love
            for equestrian pursuits. Our club is committed to upholding the rich
            traditions of polo while embracing innovation and inclusivity.
          </div>
          <div className="border-[1px] w-fit self-center p-4 lg:px-6 rounded-md border-[#B79D52] font-medium text-xs lg:text-base drop-shadow-2xl selection:text-white selection:bg-black/80">
            Join The Experience
          </div>{" "}
        </div>
        <div className="border-4 w-full lg:w-1/2 lg:h-full">
          {" "}
          <picture className="">
            <source className="" media="(max-width: 750px)" srcSet={aboutUs1} />
            <img src={aboutUs2} alt="" className="h-full w-full" />
          </picture>
        </div>
      </div>
    </>
  );
};

export default AboutIntro;
