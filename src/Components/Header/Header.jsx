import React, { useState } from "react";
import MalosTechnologiesLogo from "../../assets/MalosTechnologiesLogo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  const handleHeader = () => {
    setShowHeader((prevShow) => !prevShow);
  };

  return (
    <header className="bg-white lg:pt-8">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <!-- lg+ --> */}
        <nav className="relative flex w-full justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
          <div className="flex flex-row items-start md:items-center flex-shrink-0">
            <Link to={"/"} className="flex flex-row items-center mt-5 md:mt-0">
              <img
                className="w-auto h-8 lg:h-10"
                src={MalosTechnologiesLogo}
                alt="Malos"
              />
              <p className="text-xl md:text-xl lg:text-2xl font-bold">
                MALOS TECHNOLOGIES
              </p>
            </Link>

            <button
              type="button"
              onClick={handleHeader}
              className="place-self-center bg-gray-200 h-fit inline-flex p-1 ml-5 text-black rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {!showHeader ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden ml-10 lg:flex lg:items-center lg:space-x-10">
            <NavLink
              to={"/"}
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Home
            </NavLink>
            <NavLink
              to={"/aboutus"}
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              AboutUs
            </NavLink>

            <NavLink
              to={"/contact"}
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Contact
            </NavLink>

            <NavLink
              to={"/services"}
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Services
            </NavLink>

            <NavLink
              to={"/blog"}
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Blog
            </NavLink>

            <NavLink
              to={"/projects"}
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Projects
            </NavLink>
          </div>
        </nav>

        {/* <!-- xs to lg --> */}
        {showHeader && (
          <nav className="py-4 space-y-2 lg:hidden">
            <div className="flex flex-col bg-gray-200 p-3 rounded-md w-full">
              <NavLink
                to={"/"}
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                Home
              </NavLink>
              <hr className="size-1 bg-gray-300 w-full" />
              <NavLink
                to={"/aboutus"}
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                Projects
              </NavLink>
              <hr className="size-1 bg-gray-300 w-full" />
              <NavLink
                to={"/contact"}
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                Contact
              </NavLink>
              <hr className="size-1 bg-gray-300 w-full" />
              <NavLink
                to={"/services"}
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                Services
              </NavLink>
              <hr className="size-1 bg-gray-300 w-full" />
              <NavLink
                to={"/blog"}
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                Blog
              </NavLink>
              <hr className="size-1 bg-gray-300 w-full" />
              <NavLink
                to={"/projects"}
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                Projects
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
