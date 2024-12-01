import React from "react";
// import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Jobs</li>
            <li>In Press</li>
            <li>Gallery</li>
          </ul>
        </div>
        {/* Support Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>Online Chat</li>
            <li>WhatsApp</li>
            <li>Telegram</li>
            <li>Ticketing</li>
            <li>Call Center</li>
          </ul>
        </div>
        {/* FAQ Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">FAQ</h3>
          <ul className="space-y-2">
            <li>Account</li>
            <li>Booking</li>
            <li>Payments</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Don't miss out on the exciting world of travel – subscribe now and
            embark on a journey of discovery with us.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-full text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600"
            >
              Submit
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <div className="bg-gray-400 rounded-full w-fit h-fit p-3">
              {/* <IoLogoInstagram />
               */}
              <BiLogoInstagramAlt />
            </div>
            <div className="bg-gray-400 rounded-full w-fit h-fit p-3">
              <FaSquareFacebook />
            </div>
            <div className="bg-gray-400 rounded-full w-fit h-fit p-3">
              <IoLogoYoutube />
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        ©2023 Indotravi, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
