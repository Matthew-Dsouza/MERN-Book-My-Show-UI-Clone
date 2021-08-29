import React from "react";
import { Link } from "react-router-dom";

export const Poster = (props) => {
    return (
        <Link to={`/movie/${props.id}`}>
            <div className="flex flex-col justify-evenly items-center text-center px-1 md:px-3 ml-2 md:ml-1 lg:ml-1 my-2">
                <div className="sm:h-24 md:h-48 md:px-0 lg:h-auto lg:w-48 md:mx-1 lg:mx-0 md:mb-3">
                    <img
                        src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                        alt={props.original_title}
                        className="w-full h-full rounded md:mr-1 lg:mr-0"
                    />
                </div>
                <h3
                    className={`text-sm font-bold text-center ${
                        props.isDark ? "text-white" : "text-gray-700"
                    }`}
                >
                    {props.original_title}
                </h3>
                <p
                    className={`text-xs md:text-sm font-semibold ${
                        props.isDark ? "text-white" : "text-gray-700"
                    }`}
                >
                    {props.original_language}
                </p>
            </div>
        </Link>
    );
};

export default Poster;
