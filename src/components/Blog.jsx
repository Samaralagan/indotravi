import React, { useState } from "react";
import BlogCard from "./BlogCard";
import riverbridge from "../assets/riverbridge.jpg";
import jeep from "../assets/jeep.jpg";
const packages = [
  {
    image: riverbridge,
    title: "2022 Travel trends - What you need to know",
    date: "Nov 14,2022",
    content:
      "2023 taught valuable lession plans dont always workout ,flexibility in life is the key for fun.2023 taught valuable lession plans dont always workout ,flexibility in life is the key for fun.",
  },
  {
    image: jeep,
    title:
      "Jeep adventure is is a new attraction for tourists visiting Garut. ",
    date: "Nov 14,2022",
    content:
      "Jeep adventure is is a new attraction for tourists that has been popular among them now.",
  },
];

const additionalPackages = [
  {
    image: riverbridge,
    title: "2022 Travel trends - What you need to know",
    date: "Nov 14,2022",
    content:
      "2023 taught valuable lession plans dont always workout ,flexibility in life is the key for fun.",
  },
  {
    image: jeep,
    title: "Jeep adventure is is a new attraction for tourists visiting Garut.",
    date: "Nov 14,2022",
    content:
      "Jeep adventure is is a new attraction for tourists that has been popular among them now.",
  },
  {
    image: jeep,
    title: "Jeep adventure is is a new attraction for tourists visiting Garut.",
    date: "Nov 14,2022",
    content:
      "Jeep adventure is is a new attraction for tourists that has been popular among them now.",
  },
];
const Blog = () => {
  const [visiblePackages, setVisiblePackages] = useState(packages);

  const handleViewMore = () => {
    setVisiblePackages((prev) => [...prev, ...additionalPackages]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <p className="text-gray-600 mb-2 text-center max-w-md">Our Blog</p>
      <h1 className="text-3xl font-bold mb-10">Our travel memories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {visiblePackages.map((pkg, index) => (
          <BlogCard key={index} {...pkg} />
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

export default Blog;
