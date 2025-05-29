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
import training1 from "../assets/images/training1.jpeg";
import training2 from "../assets/images/training2.jpeg";
import training3 from "../assets/images/training3.jpeg";
import race1 from "../assets/images/race1.jpeg";
import race2 from "../assets/images/race2.jpeg";

const Training = () => {
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
      <div className="border-b-4 border-double border-black px-4 tab:px-8 xxl:px-16  py-10 xxl:py-16 flex flex-col lg:flex-row gap-8 xl:gap-10 items-center justify-centers text-greens mt-[70px]">
        {" "}
        <div className="flex flex-col gap-8 lg:gap-6 xl:gap-12 sborder-2 lg:w-1/2 lg:min-h-dvh xl:h-dvh">
          <div
            className="sborder-4 font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:text-start lg:px-0 lg:w-[80%] px-8 pb-8s hidden lg:block"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h2>Training Academy</h2>
          </div>
          <div
            className="sborder-4 font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:text-start lg:px-0 lg:w-[80%] px-8 pb-8s lg:hidden"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <h2>Training Academy</h2>
          </div>
          <div
            className="sborder-2 text-justify tab:text-xl lg:text-base xl:text-lg pb-8s underline underline-offset-4 decoration-[0.5px] decoration-greens/80 decoration-dotted lg:no-underline lg:tracking-tight lg:font-medium"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Located within the prestigious Gateway Polo and Racecourse, our
            Equestrian Training Academy oa comprehensive and immersive learning
            experience for aspiring equestrians. Our state-of-the-artfacilities,
            expert instructors, and passion for excellence make us the premier
            destination for equestrian training in Nigeria.<br></br>
            <br></br>
            Our Training Programs:<br></br>
            <br></br>- Beginner's Program: Learn the fundamentals of horse
            riding and care <br></br>- Intermediate Program: Develop your riding
            skills and learn advanced techniques <br></br>- Advanced Program:
            Refine your skills and prepare for competitions <br></br>- Polo
            Training Program: Learn the art of polo from experienced instructors{" "}
            <br></br>- Horse Care and Management Program: Learn the essentials
            of horse care and management.
          </div>
          <div
            className="border-[1px] w-fit self-center p-4 lg:px-6 rounded-md border-[#B79D52] font-medium text-xs lg:text-base drop-shadow-2xl selection:text-white selection:bg-black/80 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] text-greens "
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
            <source
              className=""
              media="(max-width: 750px)"
              srcSet={training3}
            />
            <img
              src={training3}
              alt=""
              className="h-full  w-full max-h-[80vh] lg:max-h-none lg:min-h-dvh xl:h-dvh object-contain lg:object-fill transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] rounded-lg"
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
            <source
              className=""
              media="(max-width: 750px)"
              srcSet={training1}
            />
            <img
              src={aboutUs2}
              alt=""
              className="h-full  w-full max-h-[80vh] lg:max-h-none lg:min-h-dvh xl:h-dvh object-contain lg:object-cover transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] rounded-md"
            />
          </picture>
        </div>
      </div>
      <div className="border-b-4 border-double border-black px-4 tab:px-8 xxl:px-16  py-10 xxl:py-16 flex flex-col lg:flex-row gap-8 xl:gap-10 items-center justify-centers text-greens ">
        {" "}
        <div className="flex flex-col gap-8 lg:gap-6 xl:gap-12 sborder-2 lg:w-1/2 lg:min-h-dvh xl:h-dvh">
          <div
            className="sborder-4 font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:text-start lg:px-0 lg:w-[80%] px-8 pb-8s hidden lg:block"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h2>Gateway Racecourse</h2>
          </div>
          <div
            className="sborder-4 font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:text-start lg:px-0 lg:w-[80%] px-8 pb-8s lg:hidden"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <h2>Gateway Racecourse</h2>
          </div>
          <div
            className="sborder-2 text-justify tab:text-xl lg:text-base xl:text-lg pb-8s underline underline-offset-4 decoration-[0.5px] decoration-greens/80 decoration-dotted lg:no-underline lg:tracking-tight lg:font-medium"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Imagine a destination where the thrill of horse racing meets the
            elegance of polo, set against the breathtaking backdrop of lush
            greenery. Welcome to the Gateway Racecourse, the ultimate leisure
            and entertainment hub.<br></br>
            <br></br>
            At Gateway Racecourse, we're passionate about creating an
            unforgettable experience for our visitors. Our state-of-the-art
            facilities are designed to provide an exhilarating atmosphere,
            whether you're a horse racing enthusiast, a bettor, jockey, polo
            aficionado, or simply looking for a unique day out with family and
            friends.<br></br>
            <br></br>
            From the rush of adrenaline as the horses thunder down the track, to
            the skill and precision of polo players on horseback, every event at
            Gateway Racecourse is a spectacle to behold. Our expert team is
            dedicated to delivering exceptional hospitality, ensuring that every
            visitor feels like a VIP.<br></br>
            <br></br>
            Join us for an experience that will leave you breathless!
          </div>
          <div
            className="border-[1px] w-fit self-center p-4 lg:px-6 rounded-md border-[#B79D52] font-medium text-xs lg:text-base drop-shadow-2xl selection:text-white selection:bg-black/80 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] text-greens lg:relative bottom-4"
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
              src={race2}
              alt=""
              className="h-full  w-full max-h-[80vh] lg:max-h-none lg:min-h-dvh xl:h-dvh object-contain lg:object-fill transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] rounded-lg"
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
            <source className="" media="(max-width: 750px)" srcSet={race1} />
            <img
              src={race2}
              alt=""
              className="h-full  w-full max-h-[80vh] lg:max-h-none lg:min-h-dvh xl:h-dvh object-contain lg:object-fill transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] rounded-lg"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Training;
