import React, { useState } from "react";
import Card from "./Card";
import bali from "../assets/bali.jpg";
import java from "../assets/java.jpg";
import solo from "../assets/solo.jpg";

const packages = [
  {
    image: bali,
    title: "Bali Tour Package",
    price: 285,
    days: "7 Days",
    rating: "4.9",
    date: "23 August - 29 August",
  },
  {
    image: java,
    title: "Java Tour Package",
    price: 218,
    days: "5 Days",
    rating: "4.9",
    date: "23 August - 27 August",
  },
  {
    image: solo,
    title: "Solo Tour Package",
    price: 163,
    days: "3 Days",
    rating: "4.9",
    date: "23 August - 25 August",
  },
];

const additionalPackages = [
  {
    image: bali,
    title: "Yogyakarta Tour Package",
    price: 195,
    days: "4 Days",
    rating: "4.8",
    date: "24 August - 28 August",
  },
  {
    image: bali,
    title: "Lombok Tour Package",
    price: 200,
    days: "6 Days",
    rating: "4.7",
    date: "25 August - 30 August",
  },
];
const Package = () => {
  const [visiblePackages, setVisiblePackages] = useState(packages);

  const handleViewMore = () => {
    setVisiblePackages((prev) => [...prev, ...additionalPackages]);
  };

  return (
    <div className="min-h-screen  flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">Our Tourist Destination</h1>
      <p className="text-gray-600 mb-10 text-center max-w-md">
        Our tourist destinations offer an unrivaled blend of natural beauty and
        cultural richness.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {visiblePackages.map((pkg, index) => (
          <Card key={index} {...pkg} />
        ))}
      </div>
      {visiblePackages.length === packages.length && (
        <button
          onClick={handleViewMore}
          className="mt-10 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          View More
        </button>
      )}
    </div>
  );
};

export default Package;
