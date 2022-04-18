import React from "react";
import { BiChevronRight, BiMenu, BiChevronDown } from "react-icons/bi";
import { GoSearch } from "react-icons/go";

const NavbarSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Mumbai <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <GoSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavbarMd = () => {
  return (
    // searchbar div
    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
      <GoSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for Movies, Events, Plays, Sports and Activities"
      />
    </div>
  );
};

const NavbarLg = () => {
  return (
    <>
      <div className="container mx-auto px-0 flex items-center justify-center">
        <div className="flex items-center w-full gap-3">
          {/* logo div  */}
          <div className="w-12 h-12">
            <a href="/">
              <img
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="logo"
                className="w-full h-full"
              />
            </a>
          </div>

          {/* searchbar div */}
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded text-sm">
            <GoSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>

        {/* <div className="flex items-center gap-3">
                    <span className="text-gray-400 hover:text-white cursor-pointer text-sm flex items-center">
                        Mumbai <BiChevronDown />
                    </span>
                    <button className="bg-red-600 text-white px-2 py-1 text-base  rounded">
                        Sign in
                    </button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div> */}
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-bookMyShow-700 p-4">
        <div className="md:hidden">
          {/* Mobile screens */}
          <NavbarSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/* Medium screens */}
          <NavbarMd />
        </div>
        <div className="hidden lg:flex flex-wrap">
          {/* Large screens */}
          <NavbarLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
