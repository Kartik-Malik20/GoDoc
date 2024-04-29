import React, { useState } from "react";
import logo from "../assets/GoDoc.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex items-center p-2 fixed top-0 z-20 bg-black">
      <div className="w-full flex justify-between items-center mx-auto px-6">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-40 hover:scale-105 duration-1000 transition"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-6 md:gap-10 text-md md:text-lg">
          <li className="text-slate-300 hover:text-white font-medium cursor-pointer hover:scale-105 duration-1000 transition">
            <Link to="/bookappointment">Book Appointments</Link>
          </li>
          <li className="text-slate-300 hover:text-white font-medium cursor-pointer hover:scale-105 duration-1000 transition">
            <Link to="/appointments">All Appointments</Link>
          </li>
          <li className="text-slate-300 hover:text-white font-medium cursor-pointer hover:scale-105 duration-1000 transition">
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            onClick={() => setToggle(!toggle)}
            src={toggle ? close : menu}
            alt=""
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-16 -right-1 mx-4 my-2 min-w-[140px] bg-black z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col text-lg gap-4 p-4">
              <li className="text-white font-medium cursor-pointer">
                <Link to="/bookappointment">Book Appointments</Link>
              </li>
              <li className="text-white font-medium cursor-pointer">
                <Link to="/appointments">All Appointments</Link>
              </li>
              <li className="text-white font-medium cursor-pointer">
                <Link to="/signup">SignUp</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
