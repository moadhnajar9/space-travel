import React from "react";
import logo from "../assets/shared/logo.svg";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const NavbarMobile = () => {
  const [toggleMenu, setToggleMenu] = React.useState(true);

  return (
    <div className="md:hidden flex justify-between items-center ">
      <div className="p-4">
        <img src={logo} alt="logo" />
      </div>
      <div className="relative  ">
        <div onClick={() => setToggleMenu((prv) => !prv)} className=" pr-8 ">
          {toggleMenu ? <HiMenuAlt3 size={35} /> : <IoClose size={35} />}
        </div>
        <ul
          className={`mobile__menu bg-menu z-10 space-y-12   ${
            !toggleMenu ? "mobile__menu--active" : ""
          }`}
        >
          <li
            ariaSelected="true"
            className="py-3 cursor-pointer inline-block pt-24  "
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

const NavbarTebletScreen = () => {
  return (
    <div className="hidden md:flex justify-between items-center  py-5  lg:hidden">
      <div className="p-4 ">
        <img src={logo} alt="logo" />
      </div>
      <ul
        className="
        underline-indicators 
        bg-menu
        flex 
        space-x-12
        text-sm 
        font-ff-sans-cond 
        leading-10 
        uppercase 
        px-12
        tracking-widest"
      >
        <li ariaSelected="true" className="py-5 cursor-pointer ">
          <a href="#Active">Home</a>
        </li>
        <li ariaSelected="false" className="py-5 cursor-pointer">
          <a href="#Hovred">Destination</a>
        </li>
        <li ariaSelected="false" className="py-5 cursor-pointer">
          <a href="#Idle">Crew</a>
        </li>
        <li ariaSelected="false" className="py-5 cursor-pointer">
          <a href="#Idle">Technology</a>
        </li>
      </ul>
    </div>
  );
};

const NavbarDesktopScreen = () => {
  return (
    <div className="hidden lg:flex justify-between items-center relative after:absolute lg:after:w-[10rem]/ after:bg-light/25 after:h-px after:right-1/2 2xl:after:w-[40%]  ">
      <div className="p-4 lg:p-16">
        <img src={logo} alt="logo" />
      </div>
      <ul
        className="
        underline-indicators 
        bg-menu
        flex 
        space-x-20
        text-base 
        font-ff-sans-cond 
        leading-10 
        uppercase 
        px-32
        
        tracking-widest"
      >
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
    <nav className="text-light">
      <NavbarMobile />
      <NavbarTebletScreen />
      <NavbarDesktopScreen />
    </nav>
  );
};

export default Navbar;
