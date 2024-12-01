import React, { useState } from "react";
import { FaCalendarAlt, FaWallet, FaUser } from "react-icons/fa";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import PackagesPopup from "./PackagesPopup";
import mountainadventure from "../assets/mountainadventure.jpg";
import beach from "../assets/beach.jpg";
import citylight from "../assets/citylight.jpg";
const FilterComponent = () => {
  const [selectedDate, setSelectedDate] = useState("Select Date");
  const [selectedBudget, setSelectedBudget] = useState("Select Budget");
  const [selectedGuest, setSelectedGuest] = useState("Select Guest");

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Sample package data
  const packages = [
    {
      id: 1,
      title: "Beachside Getaway",
      description: "Relax by the beach with our exclusive package.",
      date: "12/12/2024",
      budget: "$500 - $1000",
      guests: "2 Guests",
      image: beach,
    },
    {
      id: 2,
      title: "Mountain Adventure",
      description: "Explore the mountains with guided tours.",
      date: "01/01/2025",
      budget: "$1000 - $5000",
      guests: "3+ Guests",
      image: mountainadventure,
    },
    {
      id: 3,
      title: "City Lights Experience",
      description: "Enjoy a luxurious stay in the heart of the city.",
      date: "05/01/2025",
      budget: "$500 - $1000",
      guests: "1 Guest",
      image: citylight,
    },
  ];

  const handleSearch = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center bg-gray-100 bg-opacity-35 p-4 sm:rounded-full rounded shadow-md space-y-4 sm:space-y-0 sm:space-x-4">
      {/* Date Dropdown */}
      <div className="relative w-full sm:w-auto sm:border-r-2 sm:border-gray-300 pr-4">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="flex items-center w-full sm:w-auto text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400">
              <FaCalendarAlt className="mr-2" />
              {selectedDate}
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            </MenuButton>
          </div>
          <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <MenuItem>
              <button
                onClick={() => setSelectedDate("12/12/2024")}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                12/12/2024
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => setSelectedDate("01/01/2025")}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                01/01/2025
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => setSelectedDate("05/01/2025")}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                05/01/2025
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>

      {/* Budget Dropdown */}
      <div className="relative w-full sm:w-auto sm:border-r-2 sm:border-gray-300 pr-4">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="flex items-center w-full sm:w-auto text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400">
              <FaWallet className="mr-2" />
              {selectedBudget}
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            </MenuButton>
          </div>
          <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <MenuItem>
              <button
                onClick={() => setSelectedBudget("$100 - $500")}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                $100 - $500
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => setSelectedBudget("$500 - $1000")}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                $500 - $1000
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => setSelectedBudget("$1000 - $5000")}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                $1000 - $5000
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>

      {/* Guest Dropdown */}
      <div className="relative w-full sm:w-auto">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="flex items-center w-full sm:w-auto text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400">
              <FaUser className="mr-2" />
              {selectedGuest}
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            </MenuButton>
          </div>
          <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <MenuItem>
              <button
                onClick={() => setSelectedGuest("1 Guest")}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                1 Guest
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => setSelectedGuest("2 Guests")}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                2 Guests
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => setSelectedGuest("3+ Guests")}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                3+ Guests
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>

      {/* Search Button */}
      <div className="w-full sm:w-auto">
        <button
          onClick={handleSearch}
          className="w-full sm:w-auto bg-white text-black px-6 py-2 rounded-md shadow hover:bg-blue-700 hover:text-white focus:ring-2 focus:ring-blue-400"
        >
          Search
        </button>
      </div>

      {/* Packages Popup */}
      <PackagesPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        filters={{
          date: selectedDate,
          budget: selectedBudget,
          guests: selectedGuest,
        }}
        packages={packages}
      />
    </div>
  );
};

export default FilterComponent;
