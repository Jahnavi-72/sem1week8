import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Brand</h1>
          </div>

          {/* Menu Button for Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Links - Default Hidden on Mobile */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex space-x-4 md:items-center`}
          >
            <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium">
              Services
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
