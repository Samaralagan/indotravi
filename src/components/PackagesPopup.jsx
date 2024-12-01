import React from "react";

const PackagesPopup = ({ isOpen, onClose, filters, packages }) => {
  if (!isOpen) return null; // Don't render if the popup is not open

  // Filter packages based on selected filters
  const filteredPackages = packages.filter((pkg) => {
    const matchesDate =
      filters.date === "Select Date" || pkg.date === filters.date;
    const matchesBudget =
      filters.budget === "Select Budget" || pkg.budget === filters.budget;
    const matchesGuests =
      filters.guests === "Select Guest" || pkg.guests === filters.guests;

    return matchesDate && matchesBudget && matchesGuests;
  });

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      style={{ zIndex: 9999 }} // Ensures popup is above all other components
    >
      <div className="bg-white rounded-lg p-6 w-11/12 sm:w-2/3 lg:w-1/2 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">Available Packages</h2>
        {filteredPackages.length > 0 ? (
          <div className="grid gap-4">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="border rounded-lg p-4 flex flex-col sm:flex-row"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full sm:w-32 h-32 rounded-md object-cover"
                />
                <div className="sm:ml-4 mt-2 sm:mt-0">
                  <h3 className="text-lg font-bold">{pkg.title}</h3>
                  <p className="text-sm text-gray-500">{pkg.description}</p>
                  <p className="text-sm text-gray-700">
                    <strong>Date:</strong> {pkg.date}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Budget:</strong> {pkg.budget}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Guests:</strong> {pkg.guests}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No packages found matching the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default PackagesPopup;
