import React from "react";
import { Link, NavLink, useLocation } from "react-router";

const Navbar = () => {
  return (
    <div className=" fixed top-0 left-0 right-0 bg-[#1B1B1B] text-white font-bold shadow-xl z-50">
      <div className="container navbar mx-auto">
        <div className="navbar-start ">
          <a className="btn btn-ghost text-3xl">Jamil Ahmed</a>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <a className="btn">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
