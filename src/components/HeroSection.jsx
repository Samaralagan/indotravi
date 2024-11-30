import React, { useState } from "react";

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-hero-bg bg-cover bg-center bg-no-repeat w-[95%] h-screen mx-auto rounded-3xl flex flex-col items-center text-white relative">
      {/* Navbar */}
      <nav className="absolute top-0 w-full flex justify-between items-center p-4 bg-transparent text-white z-10">
        <h1 className="font-bold text-xl">INDOTRAVI</h1>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={toggleMobileMenu} className="text-white">
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`md:flex space-x-6 bg-gray-500 bg-opacity-50 rounded-2xl px-10 py-2 gap-3 ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="hover:underline">About</li>
          <li className="hover:underline">Services</li>
          <li className="hover:underline">Tour</li>
          <li className="hover:underline">Contact</li>
        </ul>

        <div className="flex space-x-4 items-center">
          <button className="bg-white text-black px-4 py-2 rounded-2xl">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center text-center mt-20 w-full z-10">
        <h1 className="text-5xl font-bold mb-4">
          Extraordinary natural and cultural charm
        </h1>
        <p className="mt-4 text-xl mb-6">
          Exploring Indonesia is an unforgettable adventure.
        </p>

        {/* Search Section */}
        <div className="flex flex-wrap mt-6 bg-white p-4 rounded-md space-x-4 shadow-md justify-center md:w-[80%] w-full">
          <input
            type="date"
            className="border border-gray-300 rounded px-2 py-1 m-2 w-full sm:w-1/3"
            placeholder="Date"
          />
          <input
            type="number"
            className="border border-gray-300 rounded px-2 py-1 m-2 w-full sm:w-1/3"
            placeholder="Budget"
          />
          <input
            type="number"
            className="border border-gray-300 rounded px-2 py-1 m-2 w-full sm:w-1/3"
            placeholder="Guest"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded m-2">
            Search
          </button>
        </div>
      </div>

      {/* Stats Section */}

      {/* Stats Section */}
      <div className="w-[60%] flex flex-col md:flex-row gap-2 justify-center z-10 mt-6 md:mt-12 md:bottom-[-40px] md:absolute relative">
        <div className="text-center bg-white rounded-md p-2 shadow-lg w-full  text-black">
          <h2 className="text-2xl font-bold">10M+</h2>
          <p>Total Customers</p>
        </div>
        <div className="text-center bg-white rounded-md p-2 shadow-lg w-full  text-black">
          <h2 className="text-2xl font-bold">09+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="text-center bg-white rounded-md p-2 shadow-lg w-full  text-black">
          <h2 className="text-2xl font-bold">12K</h2>
          <p>Total Destinations</p>
        </div>
        <div className="text-center bg-white rounded-md p-2 shadow-lg w-full  text-black">
          <h2 className="text-2xl font-bold">5.0</h2>
          <p>Average Rating</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
