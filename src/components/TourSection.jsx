import React from "react";
import tourImage1 from "../assets/toursection1.jpg"; // Replace with your image paths
// import tourImage2 from "../assets/tourImage2.jpg";
// import tourImage3 from "../assets/tourImage3.jpg";
// import tourImage4 from "../assets/tourImage4.jpg";

const TourSection = () => {
  const locations = [
    {
      title: "Bromo Tengger Tour",
      location: "Bromo, East Java",
      image: tourImage1,
      style: "col-span-2", // Large image in row 1
    },
    {
      title: "Bali Beach Tourism",
      location: "Denpasar, Bali",
      image: tourImage1,
      style: "col-span-1", // Small image in row 1
    },
    {
      title: "Sumatra Tourism",
      location: "Lampung, South Sumatra",
      image: tourImage1,
      style: "col-span-1", // Small image in row 2
    },
    {
      title: "Borobudur Temple Tour",
      location: "Jogjakarta, Central Java",
      image: tourImage1,
      style: "col-span-2", // Large image in row 2
    },
  ];

  return (
    <div className="w-full min-h-screen p-6 flex justify-center">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className="mb-8">
          <p className="text-gray-600 text-sm">Best Location</p>
          <h1 className="text-3xl font-bold text-gray-800">
            Indonesian Tourism
          </h1>
          <p className="text-gray-600 mt-2">
            Extraordinary natural beauty, enjoy the rich culture, and experience
            the friendliness of the local people.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-3 gap-4">
          {/* Row 1 */}
          <div className="grid grid-cols-3 col-span-3 gap-4">
            <div className="col-span-2 row-span-1 relative rounded-lg overflow-hidden shadow-md">
              {/* Large Image */}
              <img
                src={locations[0].image}
                alt={locations[0].title}
                className="w-full h-60 object-cover" // Adjusted height
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{locations[0].title}</h3>
                <p className="text-sm">{locations[0].location}</p>
              </div>
            </div>
            <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden shadow-md">
              {/* Small Image */}
              <img
                src={locations[1].image}
                alt={locations[1].title}
                className="w-full h-60 object-cover" // Adjusted height
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{locations[1].title}</h3>
                <p className="text-sm">{locations[1].location}</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 col-span-3 gap-4">
            <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden shadow-md">
              {/* Small Image */}
              <img
                src={locations[2].image}
                alt={locations[2].title}
                className="w-full h-60 object-cover" // Adjusted height
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{locations[2].title}</h3>
                <p className="text-sm">{locations[2].location}</p>
              </div>
            </div>
            <div className="col-span-2 row-span-1 relative rounded-lg overflow-hidden shadow-md">
              {/* Large Image */}
              <img
                src={locations[3].image}
                alt={locations[3].title}
                className="w-full h-60 object-cover" // Adjusted height
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{locations[3].title}</h3>
                <p className="text-sm">{locations[3].location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSection;
