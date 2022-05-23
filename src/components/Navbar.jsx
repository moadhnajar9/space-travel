import React from "react";
import logo from "../assets/shared/logo.svg";
import mobileImg from "../assets/home/background-home-mobile.jpg";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const NavbarMobile = () => {
  const [toggleMenu, setToggleMenu] = React.useState(true);

  return (
    <div className="md:hidden flex justify-between items-center">
      <div className="p-4">
        <img src={logo} alt="logo" />
      </div>
      <div className="relative ">
        <div onClick={() => setToggleMenu((prv) => !prv)} className=" pr-8 ">
          {toggleMenu ? <HiMenuAlt3 size={35} /> : <IoClose size={35} />}
        </div>
        <ul
          className={`mobile__menu ${
            !toggleMenu ? "mobile__menu--active" : ""
          }`}
        >
          <li
            ariaSelected="true"
            className="py-3 cursor-pointer inline-block pt-10 "
          >
            <a href="#Active">
              <span className="mr-2 font-ff-sans-cond font-bold tracking-widest ">
                00
              </span>
              Home
            </a>
          </li>
          <li ariaSelected="false" className="py-3 cursor-pointer inline-block">
            <a href="#Hovred">
              <span className="mr-2 font-ff-sans-cond font-bold tracking-widest ">
                01
              </span>
              Destination
            </a>
          </li>
          <li ariaSelected="false" className="py-3 cursor-pointer inline-block">
            <a href="#Idle">
              <span className="mr-2 font-ff-sans-cond font-bold tracking-widest ">
                02
              </span>
              Crew
            </a>
          </li>
          <li ariaSelected="false" className="py-3 cursor-pointer inline-block">
            <a href="#Idle">
              <span className="mr-2 font-ff-sans-cond font-bold tracking-widest ">
                03
              </span>
              Technology
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const NavbarLargeScreen = () => {
  return (
    <div className="hidden md:block">
      <div className="p-4 ">
        <img src={logo} alt="logo" />
      </div>
      <ul className="underline-indicators uppercase leading-10 flex ">
        <li ariaSelected="true" className="py-5 cursor-pointer ">
          <a href="#Active">
            <span className="mr-2 font-ff-sans-cond font-bold tracking-widest ">
              00
            </span>
            Home
          </a>
        </li>
        <li ariaSelected="false" className="py-5 cursor-pointer">
          <a href="#Hovred">
            <span className="mr-2 font-ff-sans-cond font-bold tracking-widest ">
              01
            </span>
            Destination
          </a>
        </li>
        <li ariaSelected="false" className="py-5 cursor-pointer">
          <a href="#Idle">
            <span className="mr-2 font-ff-sans-cond font-bold tracking-widest ">
              02
            </span>
            Crew
          </a>
        </li>
        <li ariaSelected="false" className="py-5 cursor-pointer">
          <a href="#Idle">
            <span className="mr-2 font-ff-sans-cond font-bold tracking-widest ">
              03
            </span>
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
};
const Navbar = () => {
  return (
    <nav className="text-white">
      <NavbarMobile />
      <NavbarLargeScreen />
    </nav>
  );
};

export default Navbar;
