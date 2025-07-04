import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import pop1 from "../assets/images/pop1.jpeg";
import pop2 from "../assets/images/pop2.jpeg";
import pop3 from "../assets/images/pop2.jpeg"; // Add your third image

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const images = [pop1, pop2, pop3];

const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-20 select-none"
      onClose={onClose}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          <Dialog.Panel
            className="relative w-full max-w-md rounded-xl bg-white/90 p-6 backdrop-blur-lg"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            {" "}
            <Dialog.Title
              as="h3"
              className="text-bases/7 font-semibold text-2xl text-gray-700 hover:text-gray-900 flex items-center justify-center"
            >
              <span className="underline underline-offset-4 text-center sborder-2 poppinsFonts">
                Stay Updated!
              </span>{" "}
            </Dialog.Title>
            {/* Close Button */}
            <button className="absolute top-4 right-4" onClick={onClose}>
              <IoMdClose className="h-6 w-6 text-gray-700 hover:text-gray-900" />
            </button>
            {/* Image Carousel */}
            <div className="relative mt-4 h-[50vh] flex items-center justify-center">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-contain rounded-lg p-4 shadow-lg transition duration-300"
              />

              {/* Prev/Next Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow"
              >
                <FaArrowRight />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-2 rounded-full ${
                      idx === currentIndex ? "bg-black" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default AlertModal;
