import React from "react";
import ReviewCarousel from "./ReviewCarousel";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";

const reviews = [
  {
    name: "Donald Sullivan",
    title: "Founder, Fiko",
    review:
      "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details.",
    image: profile1,
  },
  {
    name: "Jane Doe",
    title: "Travel Enthusiast",
    review:
      "A wonderful platform with excellent reviews and pricing options. Highly recommend it for frequent travelers!",
    image: profile2,
  },
  {
    name: "John Smith",
    title: "Adventurer",
    review:
      "The destination descriptions and images make it so easy to choose where to go next. Love this site!",
    image: profile3,
  },
];
const Reviews = () => {
  return (
    <div className="w-full min-h-auto p-6 flex justify-center">
      <div className=" max-w-7xl flex items-center justify-center bg-gray-100">
        <ReviewCarousel reviews={reviews} />
      </div>
    </div>
  );
};

export default Reviews;
