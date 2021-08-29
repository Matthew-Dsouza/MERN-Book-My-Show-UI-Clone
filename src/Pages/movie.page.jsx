import React, { useContext, useState, useEffect } from "react";
import { FaCcApplePay, FaCcPaypal } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "react-slick";

// Components
import MovieHero from "../Components/MovieHero/movieHero.component";
import Cast from "../Components/Cast/cast.component";
import PosterSlider from "../Components/PosterSlider/posterSlider.component";

// Configs
import TempPosters from "../Config/tempPosters.config";

// Context
import { MovieContext } from "../Context/movie.context";

const MoviePage = () => {
    // always keep Hooks before everything else!

    const { movieID } = useParams();
    const { movie } = useContext(MovieContext);

    const [cast, setCast] = useState([]);

    const [similarMovies, setSimilarMovies] = useState([]);

    // sir gave recommendedMovies for this one
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    /* Cast info */
    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${movieID}/credits`);
            setCast(getCast.data.cast);
        };

        requestCast();
    }, [movieID]);

    /* you might also like */
    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(
                `/movie/${movieID}/similar`
            );
            setSimilarMovies(getSimilarMovies.data.cast);
        };

        requestSimilarMovies();
    }, [movieID]);

    /* handpicked exclusives */
    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(
                `/movie/${movieID}/recommendations`
            );
            setRecommendedMovies(getRecommendedMovies.data.cast);
        };

        requestRecommendedMovies();
    }, [movieID]);

    // we just rebuilt the settings component from posterCarousel.config.js
    const settings = {
        dots: false,
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        InitialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                    dots: false,
                },
            },
        ],
    };

    const settingsCast = {
        dots: false,
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        InitialSlide: 0,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                    dots: false,
                },
            },
        ],
    };

    return (
        <>
            <MovieHero />
            <div className="container px-4 lg:w-2/3 lg:ml-10">
                <div className="flex flex-col items-start mt-8 mb-4">
                    {/* about movie for large */}
                    <h2 className="text-black font-bold text-3xl my-4  hidden lg:block">
                        About the movie
                    </h2>
                    {/* movie sypnosis for large */}
                    <p className="text-xl  hidden lg:block">{movie.overview}</p>
                </div>

                <div className="mb-8">
                    <hr />
                </div>

                {/* Applicable Offers */}
                <div className="my-8">
                    <h2 className="text-xl font-semibold text-center mb-3">
                        Applicable offers
                    </h2>

                    <div className="flex flex-col gap-3">
                        {/* row1 */}
                        <div className="flex flex-col gap-3 md:flex-row lg:flex-row lg:flex-nowrap">
                            {/* Apple Pay */}
                            <div className="flex items-start gap-3 bg-yellow-100 px-2 py-1 border-2 border-yellow-400 border-dashed rounded-lg">
                                <div className="w-12 h-6">
                                    <FaCcApplePay className="w-full h-full" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <h3 className="text-base font-semibold">
                                        Apple Pass
                                    </h3>
                                    <p className="text-gray-600">
                                        Get 50% off up to INR 150 on all Apple
                                        Pay* on BookMyShow Stream.
                                    </p>
                                </div>
                            </div>

                            {/* PayPal Offer */}
                            <div className="flex items-start gap-3 bg-yellow-100 px-2 py-1 border-2 border-yellow-400 border-dashed rounded-lg">
                                <div className="w-12 h-6">
                                    <FaCcPaypal className="w-full h-full" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <h3 className="text-base font-semibold">
                                        PayPal Discount
                                    </h3>
                                    <p className="text-gray-600">
                                        Get Rs.75* off on 3 movies you buy/rent
                                        on Stream. Buy Filmy Pass @Rs.99
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* row2 */}
                        <div className="flex flex-col gap-3 lg:gap-1 md:flex-row lg:flex-row lg:flex-nowrap">
                            {/* Rupay offer */}
                            <div className="flex items-start gap-3 md:gap-1 lg:gap-1 bg-yellow-100 px-2 md:px-4 lg:px-2 py-1 border-2 border-yellow-400 border-dashed rounded-lg">
                                <div className="w-12 h-6 md:w-10 lg:w-12">
                                    <img
                                        src="https://in.bmscdn.com/offers/tnclogo/rupay-stream-offer-rupay0421.jpg?23042021135408"
                                        alt="offer logo"
                                        className="rounded"
                                    />
                                </div>
                                <div className="flex flex-col items-start  md:px-2">
                                    <h3 className="text-base font-semibold">
                                        RuPay Stream Offer
                                    </h3>
                                    <p className="text-gray-600">
                                        Get 50% off up to INR 150 on all RuPay
                                        cards* on BookMyShow Stream.
                                    </p>
                                </div>
                            </div>

                            {/* Bookmyshow offer */}
                            <div className="flex items-start gap-3 lg:gap-1 bg-yellow-100 px-2 md:px-4 lg:px-2 py-1 border-2 border-yellow-400 border-dashed rounded-lg">
                                <div className="w-12 h-6 md:w-10 lg:w-12">
                                    <img
                                        src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?17022021111052"
                                        alt="offer logo"
                                        className="rounded"
                                    />
                                </div>
                                <div className="flex flex-col items-start  md:px-2">
                                    <h3 className="text-base font-semibold">
                                        Filmy Pass
                                    </h3>
                                    <p className="text-gray-600">
                                        Get Rs.75* off on 3 movies you buy/rent
                                        on Stream. Buy Filmy Pass @Rs.99
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <hr />
                </div>

                {/* Cast info */}
                <div className="my-8">
                    <h2 className="text-xl font-semibold mb-2 text-center">
                        Cast
                    </h2>
                    {/* this div used to hold the cast */}
                    {/* <div className="flex flex-wrap text-center justify-evenly lg:justify-start"></div> */}
                    <Slider {...settingsCast}>
                        <Cast
                            image="https://www.themoviedb.org/t/p/original/3PcGazfzuUjwApynUVBQvqHkL7h.jpg"
                            castName="Alexandra Breckenridge"
                            role="Jessie Anderson"
                        />
                        {cast.map((castData) => (
                            <Cast
                                image={`https://image.tmdb.org/t/p/original/${castData.profile_path}`}
                                castName={castData.original_name}
                                role={castData.character}
                            />
                        ))}
                        <Cast
                            image="https://icon2.cleanpng.com/20180722/ybz/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c09380f76.0349129615323166812296.jpg"
                            castName="Unavailable"
                            role="-"
                        />
                    </Slider>
                </div>

                <div className="mb-8">
                    <hr />
                </div>

                {/* you might also like */}
                <div className="my-8">
                    <PosterSlider
                        config={settings}
                        // images={similarMovies}
                        images={TempPosters}
                        title="You might also like"
                        isDark={false}
                    />
                </div>

                <div className="mb-8">
                    <hr />
                </div>

                {/* handpicked exclusives */}
                <div className="my-8">
                    <PosterSlider
                        config={settings}
                        // images={recommendedMovies}
                        images={TempPosters}
                        title="Handpicked Exclusives"
                        isDark={false}
                    />
                </div>
            </div>
        </>
    );
};

export default MoviePage;
