import React from "react";
import aboutUs1 from "../assets/images/aboutUs1.png";
import aboutUs2 from "../assets/images/aboutUs2.png";
import aboutMid1 from "../assets/images/aboutMid1.png";
import aboutMid2 from "../assets/images/aboutMid6.png";
import aboutMid3 from "../assets/images/aboutMid3.png";
import aboutMid4 from "../assets/images/aboutMid4.png";
import aboutMid5 from "../assets/images/aboutMid5.png";
import aboutMid6 from "../assets/images/aboutMid6.png";
import arrRight from "../assets/icons/arrRight.svg";

const AboutIntro = () => {
  const images = [
    aboutMid1,
    aboutMid2,
    aboutMid3,
    aboutMid4,
    aboutMid5,
    aboutMid6,
  ];
  return (
    <>
      {" "}
      <div className="border-b-4 border-double border-black px-4 tab:px-8 xxl:px-16 py-10 lg:py-12 xxl:py- flex flex-col lg:flex-row gap-8 xl:gap-10 items-center justify-centers text-greens mt-[70px]">
        {" "}
        <div className="flex flex-col gap-8 lg:gap-6 xl:gap-12 sborder-2 lg:w-1/2 lg:min-h-dvh xl:h-dvh">
          <div
            className="sborder-4 font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:text-start lg:px-0 lg:w-[80%] px-8 pb-8s hidden lg:block"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h2>About Gateway Polo & Racecourse</h2>
          </div>
          <div
            className="sborder-4 font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:text-start lg:px-0 lg:w-[80%] px-8 pb-8s lg:hidden"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <h2>About Gateway Polo & Racecourse</h2>
          </div>
          <div
            className="sborder-2 text-justify tab:text-xl lg:text-base xl:text-lg pb-8s underline underline-offset-4 decoration-[0.5px] decoration-greens/80 decoration-dotted lg:no-underline lg:tracking-tight lg:font-medium"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
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
          <div
            className="border-[1px] w-fit self-center p-4 lg:px-6 rounded-md border-[#B79D52] font-medium text-xs lg:text-base drop-shadow-2xl selection:text-white selection:bg-black/80 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] text-greens"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Join The Experience
          </div>{" "}
        </div>
        <div
          className="sborder-4 w-full max-h-[80vh] lg:max-h-none lg:w-1/2 lg:min-h-dvh xl:h-dvh hidden lg:block"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          {" "}
          <picture className="">
            <source className="" media="(max-width: 750px)" srcSet={aboutUs1} />
            <img
              src={aboutUs2}
              alt=""
              className="h-full  w-full max-h-[80vh] lg:max-h-none lg:min-h-dvh xl:h-dvh object-contain lg:object-fill transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]"
            />
          </picture>
        </div>
        <div
          className="sborder-4 w-full max-h-[80vh] lg:max-h-none lg:w-1/2 lg:min-h-dvh xl:h-dvh lg:hidden"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {" "}
          <picture className="">
            <source className="" media="(max-width: 750px)" srcSet={aboutUs1} />
            <img
              src={aboutUs2}
              alt=""
              className="h-full  w-full max-h-[80vh] lg:max-h-none lg:min-h-dvh xl:h-dvh object-contain lg:object-fill transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]"
            />
          </picture>
        </div>
      </div>
      <div className="sborder-4 border-black py-12 xxl:py-16 px-4 tab:px-8 xxl:px-16">
        <div
          className="sborder-4 flex flex-col lg:gap-4 lg:flex-row lg:flex-wrap justify-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full h-[290px] lg:h-[280px] lg:h-auto lg:w-[48.5%] xl:w-[32.1%] mb-6 xmd:mb-8 lg:mb-0 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] sborder-2"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-[290px] lg:h-[280px]  lg:h-auto rounded-lg drop-shadow-2xl object-contain lg:object-fill"
              />
            </div>
          ))}
        </div>
        <div className="sborder-2 border-black flex flex-col gap-6 xmd:gap-8 items-center justify-center lg:items-end lg:mt-8">
          <div
            className="flex flex-row sborder-2 h-full gap-2 w-fit text-greens transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <div className="sborder-2 animate-pulse">View More</div>
            <div className="sborder-2 animate-pulse h-[30pxs] transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] mt-2 relative bottom-[4px]">
              <img className="w-full h-full" src={arrRight} alt="Right Arrow" />
            </div>
          </div>
          <div
            className="border-[1px] w-fit self-center p-4 lg:px-6 rounded-md border-[#B79D52] font-medium text-xs lg:text-base drop-shadow-2xl selection:text-white selection:bg-black/80 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] text-greens"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Book Your Visit Now
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutIntro;
