import React from "react";

const Card = ({ image, title, price, days, rating, date }) => {
  return (
    <div
      className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 h-80 sm:h-96"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 text-white">
        {/* Top Section */}
        <div className="flex justify-between">
          <span className="bg-gray-800 bg-opacity-70 px-3 py-1 rounded-md text-sm">
            {days}
          </span>
          <span className="bg-yellow-500 bg-opacity-90 px-3 py-1 rounded-md text-sm font-semibold">
            ⭐ {rating}
          </span>
        </div>

        {/* Bottom Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm mb-1">{date}</p>
          <p className="text-xl font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
