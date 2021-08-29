import React, { useContext, useState } from "react";

// Components
import PaymentModal from "../PaymentModal/payment.component";

// Context
import { MovieContext } from "../../Context/movie.context";

export const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const { movie } = useContext(MovieContext);

    // const genres = movie.genres && movie.genres.map(({ name }) => name).join(", ");

    // optional chaining
    const genres = movie.genres?.map(({ name }) => name).join(", ");

    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };

    const buyMovies = () => {
        setIsOpen(true);
        setPrice(689);
    };

    return (
        <>
            <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} price={price} />
            <div className="flex flex-col gap-0 lg:gap-7">
                {/* premier & streaming now info */}
                <div className="flex items-center gap-3 mb-2 md:mb-8 md:px-4">
                    <div className="w-auto h-7 md:h-12 lg:h-8">
                        <img
                            src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="premier"
                            className="w-full h-full"
                        />
                    </div>
                    {/* movie status */}
                    <span className="bg-bookMyShow-800 px-2 py-1 text-white text-sm font-normal md:text-xl lg:text-sm rounded-md">
                        {movie.status}
                    </span>
                </div>

                {/* title */}
                <h1 className="hidden lg:block text-white lg:text-4xl font-bold md:px-4">
                    {movie.original_title}
                </h1>

                {/* details   */}
                <div className="flex flex-col-reverse lg:flex-col">
                    <div className="text-white text-sm md:text-lg lg:text-sm lg:font-normal flex flex-col gap-3 md:px-4 bg-opacity-60 lg:bg-opacity-0 bg-black z-10 p-2 rounded-t-sm">
                        <h4>
                            4K &bull; {movie.original_language} &bull;
                            Languages:&nbsp; 
                            <a
                                href="#"
                                className="text-red-600 font-medium hover:underline"
                            >
                                Audio(1), Subtitles(1)
                            </a>
                        </h4>
                        <h4>
                            {/* {(movie.runtime / 60).toFixed(2)}hrs &bull; {movie.genres[0].name},{" "} */}
                            {parseInt(movie.runtime / 60)}h{" "}
                            {parseInt(movie.runtime % 60)}m &bull; {genres}{" "}
                            &bull; 16+ &bull; {movie.release_date}
                        </h4>
                    </div>

                    {/* buttons */}
                    <div className="flex items-center md:text-lg gap-2 md:gap-3 mb-4 md:my-7 md:px-4 md:mb-10 md:w-screen lg:w-full">
                        <button
                            onClick={rentMovies}
                            className="text-white bg-red-600 font-medium w-full py-3 rounded-lg"
                        >
                            Rent &#8377; 149
                        </button>
                        <button
                            onClick={buyMovies}
                            className="text-white bg-red-600 font-medium w-full py-3 rounded-lg"
                        >
                            Buy &#8377; 689
                        </button>
                    </div>
                </div>

                {/* Movie sypnosis */}
                <div className="py-1 lg:hidden bg-opacity-60 bg-black z-10 p-2 rounded-b-sm">
                    <p className="text-white text-xs md:px-4 md:pb-2 md:text-lg">
                        {movie.overview}
                    </p>
                </div>
            </div>
        </>
    );
};
export default MovieInfo;
