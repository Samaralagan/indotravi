import { useState } from "react";
import doublequate from "../assets/doublequate.png";

const ReviewCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-[1200px] mx-auto bg-white shadow-lg rounded-lg p-6 min-h-[200px]">
      {/* Review Content */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
          <img
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
            className="w-16 h-16 rounded-full"
          />
        </div>

        {/* Name and Title */}
        <div className="sm:flex-1">
          <h3 className="text-lg font-semibold">
            {reviews[currentIndex].name}
          </h3>
          <p className="text-sm text-gray-500">{reviews[currentIndex].title}</p>
        </div>

        {/* Review */}
        <div
          className="mt-4 sm:mt-0 sm:ml-6 sm:flex-1"
          style={{ backgroundImage: `url(${doublequate})`, opacity: 1 }}
        >
          <p className="text-gray-700">{reviews[currentIndex].review}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 sm:left-8 top-[70%] transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        onClick={goToPrev}
        aria-label="Previous Review"
      >
        &larr;
      </button>
      <button
        className="absolute right-4 sm:right-8 top-[70%] transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        onClick={goToNext}
        aria-label="Next Review"
      >
        &rarr;
      </button>
    </div>
  );
};

export default ReviewCarousel;
