import React from 'react';

function Card({ title, description, imageUrl, onClick }) {
  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105"
      onClick={onClick}
    >
      {/* Image */}
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt="Card image"
      />

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      {/* Hover Effects */}
      <div className="p-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white rounded-b-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white">
        <button className="py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Card;
