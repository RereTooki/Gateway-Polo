import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaWifi,
  FaParking,
  FaLightbulb,
} from "react-icons/fa";

import Calendar from "./Calendar";
import "react-calendar/dist/Calendar.css";
import accIntro1 from "../assets/images/accIntro1.png";
import accIntro2 from "../assets/images/accIntro2.png";
import accIntro3 from "../assets/images/accIntro3.png";
import accIntro4 from "../assets/images/accIntro4.jpg";
import accIntro5 from "../assets/images/accIntro5.jpg";

const AccIntro = () => {
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());

  return (
    <>
      {" "}
      <section className="border-b-4 border-double border-black px-4 tab:px-8 xxl:px-16 py-10 lg:py-12 xxl:py-  gap-8 xl:gap-10  items-center justify-centers text-greens mt-[70px] space-y-8 xl:space-y-10 text-green-950">
        <div
          className="sborder-4 font-medium  text-3xl tab:text-4xl lg:text-3xl xl:text-4xl text-center lg:mb-12 text-greens"
          data-aoss="fade-up"
          data-aos-duration="1200"
        >
          <h2>Accomodations</h2>
        </div>
        {/* Top Grid (Map + Hero Image) */}
        <div className="grid  gap-8 xl:gap-10 tab:grid-cols-2 ssborder-2">
          {/* Map Block */}
          <div className="bg-green-900 text-white p-4 rounded-xl space-y-1">
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
          />
        </div>

        {/* Description */}
        <p className="tab:text-lg leading-relaxed text-greens">
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
          />

          {/* Calendar Block */}
          <Calendar />
        </div>

        {/* Chalet Details */}
        <div>
          <h3 className="text-3xl tab:text-4xl lg:text-3xl xl:text-4xl font-semibold mb-6">
            The Chalet in details
          </h3>
          <ul className="space-y-2 text-sm md:text-base tab:text-lg">
            <li>🏡 200 m²</li>
            <li>
              🛏 4 bedrooms (1 master suite, 2 double bedrooms, 1 children’s
              bedroom with 3 bunk beds)
            </li>
            <li>👨‍👩‍👧 Up to 12 people</li>
            <li>🌳 1300 m² of garden with equipped terrace</li>
          </ul>
        </div>
      </section>
      <div className="bg-white text-green-900 px-4 py-8 space-y-10 md:px-16 lg:px-32">
        {/* Ground Floor */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Ground floor</h2>
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="relative w-full md:w-1/2">
              <img
                src={accIntro4}
                alt="Ground floor"
                className="rounded-xl w-full object-cover"
              />
              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
                <FaArrowLeft className="text-green-800" />
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
                <FaArrowRight className="text-green-800" />
              </button>
            </div>

            <ul className="text-sm space-y-2 md:w-1/2">
              <li>
                <strong>Living Room and Kitchen:</strong> A 70m² living room
                with an American kitchen equipped with a central island.
              </li>
              <li>
                <strong>Master Suite:</strong> 30m² with hydro-jet spa bathroom
                and separate shower + toilet.
              </li>
              <li>
                <strong>Laundry room:</strong> Equipped with a washing machine,
                dryer and other equipment.
              </li>
            </ul>
          </div>
        </section>

        {/* Upstairs */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Upstairs</h2>
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="relative w-full md:w-1/2">
              <img
                src={accIntro5}
                alt="Upstairs"
                className="rounded-xl w-full object-cover"
              />
              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
                <FaArrowLeft className="text-green-800" />
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
                <FaArrowRight className="text-green-800" />
              </button>
            </div>

            <ul className="text-sm space-y-2 md:w-1/2">
              <li>
                <strong>Bedrooms:</strong> Two 20m² bedrooms with double beds
                (one with a 10m² balcony). A 30m² children’s bedroom with two
                bunk beds and toys.
              </li>
              <li>
                <strong>Bathroom:</strong> A bathroom with bathtub and separate
                shower.
              </li>
              <li>
                <strong>Toilets:</strong> Separate toilets.
              </li>
            </ul>
          </div>
        </section>

        {/* Equipments */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Equipments</h2>
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-2">
              <FaWifi className="text-green-800 w-4 h-4" /> WIFI
            </li>
            <li className="flex items-center gap-2">
              <FaParking className="text-green-800 w-4 h-4" /> Private parking
            </li>
            <li className="flex items-center gap-2">
              <FaLightbulb className="text-green-800 w-4 h-4" /> 24hr Power
              supply
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default AccIntro;
