import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import EntertainmentCardSlider from "../Components/Entertainment/entertainmentCard.component";
import PosterSlider from "../Components/PosterSlider/posterSlider.component";
// import Premier from "../Components/xxxPremier/premier.component";

// Configs
// import TempPosters from "../Config/tempPosters.config";

const HomePage = () => {
  // entertainment section
  const [premierMovies, setPremierMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const requestPremierMovies = async () => {
      const getPremierMovies = await axios.get("/movie/now_playing");
      setPremierMovies(getPremierMovies.data.results);
    };

    requestPremierMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
  }, []);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };

    requestPopularMovies();
  }, []);

  console.log({ upcomingMovies });

  return (
    <>
      {/* Entertainment section  */}
      <div className="flex flex-col gap-2">
        <div className="container mx-auto px-4 my-4">
          <h1 className="text-xl font-semibold text-gray-800 text-center mb-1">
            The Best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>

        <div className="bg-bookMyShow-800 py-12">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Premier and powered by Rupay"
                className="w-full h-full"
              />
            </div>
            {/* (now-playing-movies) */}
            <PosterSlider
              images={premierMovies}
              title="Now Playing"
              subtitle="Brand new releases every Friday"
              isDark
            />
          </div>
        </div>
      </div>

      {/* popular-movies */}
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={popularMovies}
          title="Popular Movies"
          isDark={false}
        />
      </div>

      {/* upcoming-movies */}
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={upcomingMovies}
          title="Upcoming Movies"
          isDark={false}
        />
      </div>

      {/* top-rated-movies */}
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={topRatedMovies}
          title="Top Rated Movies"
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
