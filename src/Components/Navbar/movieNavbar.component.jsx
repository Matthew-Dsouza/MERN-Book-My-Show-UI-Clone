import React, { useContext } from "react";
import { BiMenu, BiChevronDown, BiShareAlt } from "react-icons/bi";
import { GoSearch } from "react-icons/go";

// Context
import { MovieContext } from "../../Context/movie.context";

const MovieNavSm = () => {
    const { movie } = useContext(MovieContext);

    return (
        <>
            <div className="text-white flex items-center justify-between bg-opacity-60 bg-black z-10 p-2 rounded-sm">
                <div className="">
                    <h3 className="text-base md:text-xl font-semibold px-1 md:px-4">
                        {movie.original_title}
                    </h3>
                </div>
                <div className="w-8 h-6">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
    );
};
const MovieNavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-2/3 gap-3">
                    {/* logo div  */}
                    <div className="w-12 h-12">
                        <img
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>

                    {/* searchbar div */}
                    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded text-lg">
                        <GoSearch />
                        <input
                            type="search"
                            className="w-full bg-transparent border-none focus:outline-none"
                            placeholder="Search for Movies, Events, Plays, Sports and Activities"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* city dropdown */}
                    <span className="text-gray-400 hover:text-white cursor-pointer text-sm flex items-center">
                        Mumbai <BiChevronDown />
                    </span>
                    {/* sign in button  */}
                    <button className="bg-red-600 text-white px-2 py-1 text-base  rounded">
                        Sign in
                    </button>
                    {/* menu button  */}
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    );
};

const MovieNavbar = () => {
    return (
        <>
            <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bookMyShow-800 p-4">
                <div className="md:hidden">
                    {/* Mobile screens */}
                    <MovieNavSm />
                </div>
                <div className="hidden md:block lg:hidden">
                    {/* Same navbar is used for Medium screens */}
                    <MovieNavSm />
                </div>
                <div className="hidden lg:flex">
                    {/* Large screens */}
                    <MovieNavLg />
                </div>
            </nav>
        </>
    );
};

export default MovieNavbar;
