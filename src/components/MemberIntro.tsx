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
import race1 from "../assets/images/race1.jpeg";
import race2 from "../assets/images/race2.jpeg";

const MemberIntro = () => {
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
            <h2>Membership</h2>
          </div>
          <div
            className="sborder-4 font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:text-start lg:px-0 lg:w-[80%] px-8 pb-8s lg:hidden"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <h2>Membership</h2>
          </div>
          <div
            className="sborder-2 text-justify tab:text-xl lg:text-base xl:text-[16px] xxxl:text-lg pb-8s underline underline-offset-4 decoration-[0.5px] decoration-greens/80 decoration-dotted lg:no-underline lg:tracking-tight lg:font-medium"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Membership options for Gateway Polo Club vary based on the
            facilities, services, and level of access or participation.
            <br></br>
            <br></br>
            Here are the membership options that Gateway Polo Club shall
            provide:
            <br></br>
            <br></br>1. Full/Playing Membership:<br></br>
            <br></br> ✦ Provides access to the club's polo facilities, fields,
            and equipment. <br></br>✦ Allows participation in polo matches,
            tournaments, and practice sessions. <br></br>✦Often includes
            benefits such as coaching, access to club events, and social
            activities.<br></br> <br></br>2. Social Membership:<br></br>
            <br></br>✦ Designed for individuals interested in the social aspect
            of the club rather than actively playing polo.
            <br></br>✦ Provides access to club amenities such as the clubhouse,
            dining, and social events.
            <br></br>✦ May include limited access to watch polo matches and
            attend club functions.
          </div>
          {/* <div
            className="border-[1px] w-fit self-center p-4 lg:px-6 rounded-md border-[#B79D52] font-medium text-xs lg:text-base drop-shadow-2xl selection:text-white selection:bg-black/80 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] text-greens "
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Join The Experience
          </div>{" "} */}
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
            <source
              className=""
              media="(max-width: 750px)"
              srcSet={training1}
            />
            <img
              src={aboutUs2}
              alt=""
              className="h-full  w-full max-h-[80vh] lg:max-h-none lg:min-h-dvh xl:h-dvh object-contain lg:object-fill transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] rounded-md"
            />
          </picture>
        </div>
      </div>
      <div className="border-b-4 border-double border-black px-4 tab:px-8 xxl:px-16  py-10 xxl:py-16 flex flex-col lg:flex-row-reverse gap-8 xl:gap-10 items-center justify-centers text-greens ">
        {" "}
        <div className="flex flex-col gap-8 lg:gap-6 xl:gap-12 sborder-2 lg:w-1/2 lg:min-h-dvh xl:h-dvh">
          <div
            className="sborder-4 font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:text-start lg:px-0 lg:w-[80%] px-8 pb-8s hidden lg:block"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h2>Membership</h2>
          </div>
          <div
            className="sborder-4 font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:text-start lg:px-0 lg:w-[80%] px-8 pb-8s lg:hidden"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <h2>Membership</h2>
          </div>
          <div
            className="sborder-2 text-justify tab:text-xl lg:text-base xl:text-lg pb-8s underline underline-offset-4 decoration-[0.5px] decoration-greens/80 decoration-dotted lg:no-underline lg:tracking-tight lg:font-medium"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            3. Family Membership: <br></br>
            <br></br> ✦ Extends membership benefits to immediate family members.{" "}
            <br></br>✦ Allows participation in both playing and social aspects
            of the club for the entire family.
            <br></br> <br></br>4. Junior/Youth Membership:<br></br>
            <br></br>✦ Specifically for younger individuals interested in
            learning and playing polo.
            <br></br>✦ Offers coaching, training, and access to junior
            tournaments and events.
            <br></br>
            <br></br>
            5. Corporate Memberships:<br></br>
            <br></br> ✦ Tailored for companies or businesses seeking corporate
            entertainment or team-building activities. <br></br>✦ Includes
            benefits like access to facilities for corporate events,
            sponsorships, and branding opportunities.
          </div>
          {/* <div
            className="border-[1px] w-fit self-center p-4 lg:px-6 rounded-md border-[#B79D52] font-medium text-xs lg:text-base drop-shadow-2xl selection:text-white selection:bg-black/80 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] text-greens lg:relative bottom-4"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Join The Experience
          </div>{" "} */}
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
      <div className="border-b-4 border-double border-black px-4 tab:px-8 xxl:px-16  py-10 xxl:py-16 flex flex-col lg:flex-row gap-8 xl:gap-10 items-center justify-centers text-greens ">
        {" "}
        <div className="flex flex-col gap-8 lg:gap-6 xl:gap-12 sborder-2 lg:w-1/2 lg:min-h-dvh xl:h-dvh">
          <div
            className="sborder-4 font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:text-start lg:px-0 lg:w-[80%] px-8 pb-8s hidden lg:block"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h2>Membership</h2>
          </div>
          <div
            className="sborder-4 font-medium  text-2xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:text-start lg:px-0 lg:w-[80%] px-8 pb-8s lg:hidden"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <h2>Membership</h2>
          </div>
          <div
            className="sborder-2 text-justify tab:text-xl lg:text-base xl:text-lg pb-8s underline underline-offset-4 decoration-[0.5px] decoration-greens/80 decoration-dotted lg:no-underline lg:tracking-tight lg:font-medium"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            6. Seasonal or Trial Memberships:
            <br></br>
            <br></br> ✦ • Short-term memberships that allow individuals to
            experience the club for a limited period before committing to a full
            membership. <br></br>✦ Often used as introductory packages to
            attract new members.
            <br></br> <br></br>7. Patrons/Sponsors Membership:
            <br></br>
            <br></br>✦ For individuals or entities interested in supporting the
            club financially.
            <br></br>✦ Involves higher-tier memberships with additional
            benefits, such as exclusive events, recognition, and special
            privileges.
            <br></br>
            <br></br>
            NOTE: MEMBERSHIP REGISTRATION PLATFORM OPENING SOON!
          </div>
          {/* <div
            className="border-[1px] w-fit self-center p-4 lg:px-6 rounded-md border-[#B79D52] font-medium text-xs lg:text-base drop-shadow-2xl selection:text-white selection:bg-black/80 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] text-greens lg:relative bottom-4"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Join The Experience
          </div>{" "} */}
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

export default MemberIntro;
