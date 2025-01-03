

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav bg-white z-10  top-0 w-full  border-b-[1px] border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo Section */}
          <Link to={"/"} className="flex items-center">
            <div className="flex items-center">
              <img
                src={Logo}
                alt="Logo"
                className="h-8 sm:h-12 lg:h-16 w-auto"
              />
              <h2 className="ml-3 font-montserrat font-bold lg:text-xl text-sm xs:text-lg tracking-wide uppercase text-primary-dark">
                Sam's Physio & Rehab Clinic
              </h2>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="nav-link text-gray-700 font-medium hover:text-primary-dark">
              Home
            </Link>
            <Link to="/about" className="nav-link text-gray-700 font-medium hover:text-primary-dark">
              About
            </Link>
            <Link to="/services" className="nav-link text-gray-700 font-medium hover:text-primary-dark">
              Services
            </Link>

            <a href="tel:+917200220631">
              <button className="bg-primary-dark text-white text-sm lg:text-base font-medium rounded-3xl px-4 lg:px-6 py-2 tracking-wide hover:bg-transparent hover:text-primary-dark border-2 border-primary-dark transition ">
                Book Appointment
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100">
          <div className="px-4 py-4 flex flex-col space-y-2 text-gray-800 font-semibold text-center">
            <Link to="/" className="nav-link hover:text-primary-dark" onClick={toggleNavbar}>
              Home
            </Link>
            <Link to="/about" className="nav-link hover:text-primary-dark " onClick={toggleNavbar}>
              About
            </Link>
            <Link to="/services" className="nav-link hover:text-primary-dark" onClick={toggleNavbar}>
              Services
            </Link>
            <a href="tel:+917200220631">
              <button className="bg-primary-dark text-white text-sm font-medium rounded-3xl px-4 py-2 tracking-wide hover:bg-transparent hover:text-primary-dark border-2 border-primary-dark transition mt-2" onClick={toggleNavbar}>
                Book Appointment
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
