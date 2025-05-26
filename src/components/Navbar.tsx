import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import navMenu from "../assets/icons/navMenu.svg";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

// Define types for props
type NavigationBarProps = {
  introRef: React.RefObject<HTMLDivElement>;
  membershipRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  contactMeRef: React.RefObject<HTMLDivElement>;
  accomodationsRef: React.RefObject<HTMLDivElement>;
};

const Navbar: React.FC<NavigationBarProps> = ({
  introRef,
  membershipRef,
  aboutMeRef,
  contactMeRef,
  accomodationsRef,
}) => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setNavIsVisible(false); // Close the menu after clicking
    }
  };

  return (
    <>
      <div className="border-b-[1px] px-4 lg:px-6 flex justify-between items-center fixed top-0 w-full h-[70px]  bg-white z-50 cursor-pointer select-none">
        <div
          className="sborder-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] mt-2"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          {" "}
          <Link to="/">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
              src={logo}
              alt="background-img"
            />
          </Link>
        </div>
        <div
          className="w-fit lack lg:hidden sborder-4 flex items-center justify-center"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <button onClick={() => setNavIsVisible(!navIsVisible)}>
            {!navIsVisible && (
              <img
                src={navMenu}
                alt="A navigation icon"
                className=" select-none w3-animate-zoom w-full object-cover sborder-2 h-[15vw] md:h-[7vw] max-h-[32px]  dark:hidden"
              />
            )}
            {!navIsVisible && (
              <IoMenu
                color="#000"
                className=" select-none w3-animate-zoom w-full object-cover sborder-2 h-[15vw] md:h-[7vw] max-h-[32px] hidden dark:block relative bottsom-2 xmd:bottom-4s"
              />
            )}
            {navIsVisible && (
              <IoClose
                color="#000"
                className=" select-none w3-animate-zoom w-full h-full object-cover h-[10vw] md:h-[7vw] max-h-[32px] dark:hidden"
              />
            )}
            {navIsVisible && (
              <IoClose
                color="#000"
                className=" select-none w3-animate-zoom w-full h-full object-cover h-[10vw] md:h-[7vw] max-h-[32px] hidden dark:block"
              />
            )}
          </button>
          {navIsVisible && (
            <div
              className="w3-animate-rightNav sbg-white bg-black/70 backdrop-invert lg:hidden absolute top-[23vw] md:top-[80px] right-[4vw] nxl:right-[34px] w-[60vw] md:w-[50vw] max-w-[250px] px-[5%] shadow-[0_0_20px_2px_rgba(0,0,0,0.5)] text-center py-[20px] rounded-[10px] font-overpass flex flex-col gap-[5px] z-40 bg-black/60 text-white"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <div
                className="w3-animate-rightNav dark:text-whitessss  decoration-black ease-in-out duration-500 hover:scale-[1.05]  border-b-2 rounded-sm border-black/70 dark:border-white "
                onClick={() => scrollToSection(introRef)}
              >
                <Link to="/">Home</Link>
              </div>
              <div className="w3-animate-rightNav dark:text-whitessss  decoration-black ease-in-out duration-500 hover:scale-[1.05]  border-b-2 rounded-sm border-black/70 dark:border-white ">
                <Link to="/aboutUs">About Us</Link>
              </div>
              <div
                className="w3-animate-rightNav dark:text-whitessss  decoration-black ease-in-out duration-500 hover:scale-[1.05]  border-b-2 rounded-sm border-black/70 dark:border-white "
                onClick={() => scrollToSection(membershipRef)}
              >
                <Link to="/membership">Membership</Link>
              </div>{" "}
              <div
                className="w3-animate-rightNav dark:text-whitessss  decoration-black ease-in-out duration-500 hover:scale-[1.05]  border-b-2 rounded-sm border-black/70 dark:border-white "
                onClick={() => scrollToSection(accomodationsRef)}
              >
                <Link to="/training">Training Academy</Link>
              </div>
              <div className="w3-animate-rightNav dark:text-whitessss  decoration-black ease-in-out duration-500 hover:scale-[1.05]  border-b-2 rounded-sm border-black/70 dark:border-white ">
                <Link to="/accomodations">Accomodations</Link>
              </div>
              <div
                className="w3-animate-rightNav dark:text-whitessss  decoration-black ease-in-out duration-500 hover:scale-[1.05]  border-b-2 rounded-sm border-black/70 dark:border-white "
                onClick={() => scrollToSection(contactMeRef)}
              >
                <Link to="/contactUs">Contact Us</Link>
              </div>
              <div
                className="w3-animate-rightNav dark:text-whitessss  decoration-black ease-in-out duration-500 hover:scale-[1.05]  border-b-2 rounded-sm border-black/70 dark:border-white "
                onClick={() => scrollToSection(contactMeRef)}
              >
                <Link to="/joinUs">Join Now</Link>
              </div>
            </div>
          )}
        </div>
        <div className="vsm:hidden lg:flex flex-row justify-between items-center  w-[63vw] max-w-[650px] sborder-2 lg:text-sm xl:text-base">
          <div
            className="hover:underline underline-offset-4 decoration-black dark:decoration-white
           ease-in-out duration-500 hover:scale-[1.05] dark:text-whitessss"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <Link to="/">Home</Link>
          </div>
          <div
            className="hover:underline underline-offset-4 decoration-black dark:decoration-white
           ease-in-out duration-500 hover:scale-[1.05] dark:text-whitessss"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <Link to="/aboutUs">About Us</Link>
          </div>
          <div
            className="hover:underline underline-offset-4 decoration-black dark:decoration-white
           ease-in-out duration-500 hover:scale-[1.05] dark:text-whitessss"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <span onClick={() => scrollToSection(membershipRef)}>
              <Link to="/membership">Membership</Link>
            </span>
          </div>{" "}
          <div
            className="hover:underline underline-offset-4 decoration-black dark:decoration-white
           ease-in-out duration-500 hover:scale-[1.05] dark:text-whitessss"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <span onClick={() => scrollToSection(accomodationsRef)}>
              <Link to="/training">Training Academy</Link>
            </span>
          </div>
          <div
            className="hover:underline underline-offset-4 decoration-black dark:decoration-white
           ease-in-out duration-500 hover:scale-[1.05] dark:text-whitessss"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <Link to="/accomodations">Accomodations</Link>
          </div>
          <div
            className="hover:underline underline-offset-4 decoration-black dark:decoration-white
           ease-in-out duration-500 hover:scale-[1.05] dark:text-whitessss"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <span onClick={() => scrollToSection(contactMeRef)}>
              <Link to="/contactUs"> Contact Us</Link>
            </span>
          </div>
        </div>
        <div
          className="w-fit whitespace-nowrap py-[10px] px-[20px] rounded-full h-fit font-medium text-whitessss bg-greens transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] text-xs hidden lg:block text-white animate-pulse"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <Link to="/joinUs">Join Now</Link>
        </div>
      </div>
    </>
    // <>
    //   <div className="border-b-[1px] px-4 flex justify-between items-center fixed top-0 w-full h-[70px]  bg-white z-50">
    //     {" "}
    // <div className="border-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] mt-2">
    //   <img
    //     className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
    //     src={logo}
    //     alt="background-img"
    //   />
    // </div>
    //     <div className="flex justify-between items-center gap-4">
    // <div className="w-fit whitespace-nowrap py-[10px] px-[20px] rounded-full h-fit font-medium text-whitessss bg-greens transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] text-xs">
    //   Join Now
    // </div>
    //       <div className="sborder-2 h-fit transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04]">
    //         <img
    //           className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
    //           src={navMenu}
    //           alt="background-img"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Navbar;
