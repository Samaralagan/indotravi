import React, { useState } from "react";

const BlogCard = ({ image, title, date, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p
          className={`text-gray-500 text-sm ${
            isExpanded ? "" : "line-clamp-2"
          }`}
        >
          {content}
        </p>
        <button
          onClick={toggleContent}
          className="text-blue-500 mt-2 text-sm hover:underline"
        >
          {isExpanded ? "Show Less" : "More"}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
