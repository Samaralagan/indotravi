import React from "react";
import walk from "../assets/walk.jpg";
import FilterComponent from "./FilterComponent";
import { FaSearch } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
const HowItWorks = () => {
  return (
    <div className="w-full min-h-screen p-6 flex justify-center">
      <div className="flex flex-col md:flex-row items-center md:justify-between p-6 rounded-lg max-w-7xl w-full">
        {/* Left Section */}
        <div className="w-full md:w-[75%]">
          {/* Image */}
          <div className="relative w-full h-64 md:h-80 lg:h-[600px]">
            <img
              src={walk}
              alt="Walking"
              className="rounded-lg object-cover w-full h-full"
            />

            {/* Text and FilterComponent (Overlay on larger screens) */}
            <div className="absolute bottom-0 left-0 w-full  p-4 text-white hidden md:block">
              <p className="text-xl font-semibold">
                Embark on a journey to find your dream destination, where
                adventure and relaxation await, creating unforgettable memories
                along the way.
              </p>
              <div className="mt-4">
                <FilterComponent />
              </div>
            </div>
          </div>

          {/* Text and FilterComponent (Below image on mobile screens) */}
          <div className="block md:hidden mt-4">
            <p className="text-xl font-semibold text-gray-800">
              Embark on a journey to find your dream destination, where
              adventure and relaxation await, creating unforgettable memories
              along the way.
            </p>
            <div className="mt-4 bg-gray-400 rounded-lg">
              <FilterComponent />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 space-y-6 mt-8 md:mt-0 md:pl-6">
          <h2 className="text-3xl font-bold">How it works</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 hover:bg-white transition-all duration-200 p-4 rounded-xl">
              <span className="p-2 bg-indigo-600 text-white rounded-full">
                <FaSearch />
              </span>
              <div>
                <h3 className="text-xl font-semibold">Find your destination</h3>
                <p className="text-gray-600">
                  Embark on a journey to discover your dream destination, where
                  adventure and relaxation await.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 hover:bg-white transition-all duration-200 p-4 rounded-xl">
              <span className="p-2 bg-indigo-600 text-white rounded-full">
                <TiMessages />
              </span>
              <div>
                <h3 className="text-xl font-semibold">Book a ticket</h3>
                <p className="text-gray-600">
                  Ensure a smooth travel experience by booking tickets to your
                  preferred destination via our booking platform.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 hover:bg-white transition-all duration-200 p-4 rounded-xl">
              <span className="p-2 bg-indigo-600 text-white rounded-full">
                <AiOutlineThunderbolt />
              </span>
              <div>
                <h3 className="text-xl font-semibold">Make payment</h3>
                <p className="text-gray-600">
                  We offer a variety of payment options to meet your preferences
                  and ensure a hassle-free transaction process.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 hover:bg-white transition-all duration-200 p-4 rounded-xl">
              <span className="p-2 bg-indigo-600 text-white rounded-full">
                <MdOutlineTravelExplore />
              </span>
              <div>
                <h3 className="text-xl font-semibold">Explore destination</h3>
                <p className="text-gray-600">
                  You'll be immersed in a captivating tapestry of sights,
                  sounds, and tastes as you wind your way through the ancient
                  streets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
