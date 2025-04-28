import React, { useState } from "react";
import { Link } from "react-router-dom";

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">KeyNOtes</div>

        {/* <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Services
          </a>
        </div> */}
        <Link to='/signup'>
        <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition max-md:hidden">
          Sign Up
        </button>
        </Link>


        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 space-y-2">
          {/* <a
            href="#"
            className="block py-2 text-gray-600 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 text-gray-600 hover:text-gray-900"
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 text-gray-600 hover:text-gray-900"
          >
            Services
          </a> */}
          <Link to="/signup">
            <button className="w-[30%] text-left py-2 text-gray-900 rounded transition">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
