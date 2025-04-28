import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaWifi,
  FaParking,
  FaLightbulb,
  FaShower,
  FaToilet,
} from "react-icons/fa";
import { CiForkAndKnife } from "react-icons/ci";
import { MdBedroomParent } from "react-icons/md";
import { MdLocalLaundryService } from "react-icons/md";

import Calendar from "./Calendar";
import "react-calendar/dist/Calendar.css";
import accIntro1 from "../assets/images/accIntro1.png";
import accIntro2 from "../assets/images/accIntro2.png";
import accIntro3 from "../assets/images/accIntro3.png";
import accIntro4 from "../assets/images/accIntro4.jpg";
import accIntro5 from "../assets/images/accIntro5.jpg";
import acc4 from "../assets/images/acc4.jpeg";
import acc1 from "../assets/images/acc1.jpeg";

const features = [
  {
    title: "Kitchen",
    items: [
      "Fridge",
      "Dish washer",
      "Microwave",
      "Fridge",
      "Electric Kettle",
      "Toaster",
      "Waffle Machine",
      "High Chair for children",
      "Dining Table",
      "Central Island",
      "Coffee machine",
      "Oven",
      "Kitchen Utensils",
    ],
  },
  {
    title: "Rooms",
    items: [
      "Household linen",
      "Armchair",
      "Wardrobe or Chest of Drawers",
      "Ironing Equipment",
      "Parquet",
      "Washing Machine",
      "Air Conditioning",
      "Water Heater",
      "Cloths Racks",
      "Hair Dryer",
      "Towels",
    ],
  },
  {
    title: "Living room",
    items: [
      "Flat screen television",
      "WiFi",
      "Couch",
      "Armchairs",
      "Dining Area",
    ],
  },
  {
    title: "Outdoors",
    items: [
      "Outdoor Dining Area",
      "Outdoor Furniture",
      "Garden",
      "Barbecue",
      "Terrace",
      "Balcony",
    ],
  },
  {
    title: "Building Characteristics",
    items: ["Independent"],
  },
];

const AccIntro = () => {
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());

  return (
    <>
      {" "}
      <section className="border-b-4 border-double border-black px-4 tab:px-8 xxl:px-16 py-10 lg:py-12 xxl:py-  gap-8 xl:gap-10  items-center justify-centers text-greens mt-[70px] space-y-8 xl:space-y-10 ">
        <div
          className="sborder-4 font-medium  text-3xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:mb-12 text-greens"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <h2>Accomodations</h2>
        </div>
        {/* Top Grid (Map + Hero Image) */}
        <div className="grid  gap-8 xl:gap-10 tab:grid-cols-2 ssborder-2">
          {/* Map Block */}
          <div
            className="bg-green-900 text-white p-4 rounded-xl space-y-1"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <img
              src={accIntro1}
              alt="Map"
              className="w-full xxsl:h-[250px] rounded-md mb-3"
            />
            <h2 className="text-lg font-bold">Gateway Polo & Racecourse</h2>
            <p className="text-sm">29801-2DE N/W</p>
            <p className="text-sm">Ogun State</p>
          </div>

          {/* Hero Chalet Image */}
          <img
            src={accIntro2}
            alt="Chalet"
            className="w-full h-full object-cover rounded-xl"
            data-aos="fade-right"
            data-aos-duration="1200"
          />
        </div>

        {/* Description */}
        <p
          className="tab:text-lg leading-relaxed text-greens"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Experience the charm of our luxurious chalets at Gateway Racecourse,
          offering the perfect blend of comfort and elegance. Nestled in a
          serene environment, our spacious accommodations provide an ideal
          retreat for families and friends, with easy access to thrilling
          equestrian events and outdoor leisure.
        </p>

        {/* Image + Calendar */}
        <div className="grid  gap-8 xl:gap-10 tab:grid-cols-2">
          {/* Chalet Image */}
          <img
            src={accIntro3}
            alt="Chalet exterior"
            className="w-full h-full object-cover rounded-xl"
            data-aos="fade-left"
            data-aos-duration="1200"
          />

          {/* Calendar Block */}
          <div data-aos="fade-right" data-aos-duration="1200">
            <Calendar />
          </div>
        </div>
      </section>
      <div className="text-greens sborder-b-4 border-double border-black  px-4 tab:px-8 xxl:px-16 py-10 lg:py-12 space-y-8 xl:space-y-10">
        {/* Chalet Details */}
        <div className="sborder-4" data-aos="fade-up" data-aos-duration="1200">
          <h3 className="text-3xl tab:text-4xl lg:text-3xl xl:text-4xl font-semibold mb-6 text-center">
            The Chalet in details
          </h3>
          <ul className="space-y-2 text-sm md:text-base lg:text-lg">
            <li>🏡 200 m²</li>
            <li>
              🛏 4 bedrooms (1 master suite, 2 double bedrooms, 1 children’s
              bedroom with 3 bunk beds)
            </li>
            <li>👨‍👩‍👧 Up to 12 people</li>
            <li>🌳 1300 m² of garden with equipped terrace</li>
          </ul>
        </div>
        {/* Ground Floor */}
        <section className="sborder-2">
          <h2
            className="text-2xl tab:text-3xl lg:text-2xl xl:text-3xl font-semibold mb-4"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Ground floor
          </h2>
          <div className="flex flex-col tab:flex-row tab:items-start gap-8 xl:gap-10 ">
            <div
              className="relative w-full tab:w-1/2  sborder-4 tab:h-[270px] lg:h-[250px] xl:h-auto"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img
                src={acc4}
                alt="Ground floor"
                className="rounded-xl w-full max-h-[350px] h-full object-cover"
              />
              {/* <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
                <FaArrowLeft className="" />
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
                <FaArrowRight className="" />
              </button> */}
            </div>

            <ul
              className="sborder-2 h-full text-sm md:text-base lg:text-lg space-y-2 xmd:space-y-4 lg:space-y-6 xl:space-y-16 tab:w-1/2 xl:self-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="flex flex-row sborder-2 gap-2 items-center">
                <div className="sborder-2 h-fit ">
                  <CiForkAndKnife className="h-8 w-8" color="#B79D52" />
                </div>
                <li>
                  <strong>Living Room and Kitchen:</strong> A 70m² living room
                  with an American kitchen equipped with a central island.
                </li>
              </div>
              <div className="flex flex-row sborder-2 gap-2 items-center">
                <div className="sborder-2 h-fit ">
                  <MdLocalLaundryService className="h-8 w-8" color="#B79D52" />
                </div>
                <li>
                  <strong>Master Suite:</strong> 30m² with hydro-jet spa
                  bathroom and separate shower + toilet.
                </li>
              </div>
              <div className="flex flex-row sborder-2 gap-2 items-center">
                <div className="sborder-2 h-fit ">
                  <MdBedroomParent className="h-8 w-8" color="#B79D52" />
                </div>

                <li>
                  <strong>Laundry room:</strong> Equipped with a washing
                  machine, dryer and other equipment.
                </li>
              </div>
            </ul>
          </div>
        </section>

        {/* Upstairs */}
        <section className="sborder-2">
          <h2
            className="text-2xl tab:text-3xl lg:text-2xl xl:text-3xl font-semibold mb-4"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Upstairs
          </h2>
          <div className="flex flex-col tab:flex-row tab:items-start gap-8 xl:gap-10 ">
            <div
              className="relative w-full tab:w-1/2  sborder-4 tab:h-[270px] lg:h-[250px] xl:h-auto"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img
                src={acc1}
                alt="Ground floor"
                className="rounded-xl w-full max-h-[350px] h-full object-cover"
              />
              {/* <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
                <FaArrowLeft className="" />
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
                <FaArrowRight className="" />
              </button> */}
            </div>

            <ul
              className="sborder-2 h-full text-sm md:text-base lg:text-lg space-y-2 xmd:space-y-4 lg:space-y-6 xl:space-y-16 tab:w-1/2 xl:self-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="flex flex-row sborder-2 gap-2 items-center">
                <div className="sborder-2 h-fit ">
                  <MdLocalLaundryService className="h-8 w-8" color="#B79D52" />
                </div>
                <li>
                  <strong>Bedrooms:</strong> Two 20m² bedrooms with double beds
                  (one with a 10m² balcony). A 30m² children’s bedroom with two
                  bunk beds and toys.
                </li>
              </div>
              <div className="flex flex-row sborder-2 gap-2 items-center">
                <div className="sborder-2 h-fit ">
                  <FaShower className="h-8 w-8" color="#B79D52" />
                </div>
                <li>
                  <strong>Bathroom:</strong> A bathroom with bathtub and
                  separate shower.
                </li>
              </div>
              <div className="flex flex-row sborder-2 gap-2 items-center">
                <div className="sborder-2 h-fit ">
                  <FaToilet className="h-8 w-8" color="#B79D52" />
                </div>

                <li>
                  <strong>Toilets:</strong> Separate toilets.
                </li>
              </div>
            </ul>
          </div>
        </section>

        {/* Equipments */}
        <section>
          <h2
            className="text-3xl tab:text-4xl lg:text-3xl xl:text-4xl font-semibold mb-6 text-center "
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            Equipments
          </h2>
          <ul
            className="space-y-2 text-sm md:text-base lg:text-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <li className="flex items-center gap-2 lg:gap-4">
              <FaWifi className=" w-4 h-4" color="#B79D52" /> WIFI
            </li>
            <li className="flex items-center gap-2 lg:gap-4">
              <FaParking className=" w-4 h-4" color="#B79D52" /> Private parking
            </li>
            <li className="flex items-center gap-2 lg:gap-4">
              <FaLightbulb className=" w-4 h-4" color="#B79D52" /> 24hr Power
              supply
            </li>
          </ul>
        </section>
      </div>
      <div className="text-greens border-b-4 border-double border-black  px-4 tab:px-8 xxl:px-16 pb-10 lg:pb-12 space-y-8 xl:space-y-10">
        <div className="space-y-10">
          {features.map((section) => (
            <div key={section.title}>
              <h2
                className="text-lg md:text-xl font-semibold text-[#0c3d1e] mb-4"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {section.title}
              </h2>
              <div className="flex flex-wrap gap-3">
                {section.items.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 border border-[#0c3d1e] text-[#0c3d1e] rounded-md text-sm md:text-base"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AccIntro;
