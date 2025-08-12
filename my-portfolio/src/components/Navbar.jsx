import React from "react";
import { Link, NavLink, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const navigation = (
    <>
      <li>
        <NavLink
          to="/"
          className={() =>
            location.hash === ""
              ? "bg-white text-black px-3 py-2 rounded-md font-semibold"
              : "px-3 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
          }
        >
          home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/#skills"
          className={() =>
            location.hash === "#skills"
              ? "bg-white text-black px-3 py-2 rounded-md font-semibold"
              : "px-3 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
          }
        >
          Skills
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/#projects"
          className={() =>
            location.hash === "#projects"
              ? "bg-white text-black px-3 py-2 rounded-md font-semibold"
              : "px-3 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
          }
        >
          Projects
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/#contacts"
          className={() =>
            location.hash === "#contacts"
              ? "bg-white text-black px-3 py-2 rounded-md font-semibold"
              : "px-3 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
          }
        >
          Contacts
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-[#1B1B1B]  text-white font-bold  shadow-xl">
      <div className="container navbar mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  bg-[#1B1B1B] text-white menu-sm dropdown-content mt-3 z-[1] p-2   rounded-box w-52"
            >
              {navigation}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl">Jamil Ahmed</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  space-x-4 menu-horizontal px-4">{navigation}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
