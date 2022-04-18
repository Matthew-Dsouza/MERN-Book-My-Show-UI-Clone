import React, { useContext } from "react";

// Components
import MovieInfo from "./movieInfo.component";

// Context
import { MovieContext } from "../../Context/movie.context";

export const MovieHero = () => {
    const { movie } = useContext(MovieContext);

    return (
        <>
            <div>
                {/* Mobile */}
                <div
                    className="relative md:hidden w-full"
                    style={{ height: "calc(160vw)" }}
                >
                    <div className="absolute z-20 bottom-4 left-4 pr-4">
                        <MovieInfo />
                    </div>

                    {/* <div className="w-full h-56 bg-opacity-60 bg-black z-10 absolute bottom-0" /> */}
                    <div className="w-full h-full absolute bottom-0" />
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="poster"
                        className="w-full h-full"
                    />
                </div>

                {/* Medium */}
                <div
                    className="relative hidden md:block w-full lg:hidden"
                    style={{ height: "calc(135vw)" }}
                >
                    {/* <div className="w-full h-44 bg-opacity-60 absolute bg-black z-10 bottom-0" /> */}
                    <div className="w-full h-44 absolute bottom-0 px-2" />
                    <div className="absolute w-full z-20 bottom-0">
                        <MovieInfo />
                    </div>
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="poster"
                        className="w-full h-full"
                    />
                </div>

                {/* Large */}
                <div
                    className="relative hidden w-full lg:block"
                    style={{ height: "36rem" }}
                >
                    <div
                        className="absolute z-10 w-full h-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, rgb(34,34,34) 24.97%, rgb(34,34,34) 38.3%, rgba(34,34,34,0.04) 97.47%, rgb(34,34,34) 100%)",
                        }}
                    />

                    <div className="absolute z-30 left-10 top-10 flex items-center gap-10">
                        <div className="w-64 h-96">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt="movie card"
                                className="w-full h-full rounded-xl"
                            />
                        </div>
                        <div>
                            <MovieInfo />
                        </div>
                    </div>

                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt="poster"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </>
    );
};

export default MovieHero;
