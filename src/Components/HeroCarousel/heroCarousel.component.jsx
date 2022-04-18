import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

// Component
import { PrevArrow, NextArrow } from "./arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  // always keep hooks before other logiv
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getcarouselImages = await axios.get("/movie/now_playing");
      setCarouselImages(getcarouselImages.data.results);
    };

    requestNowPlayingMovies();
  }, []);

  const settings = {
    arrows: true,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      {/* for mobile devices & medium devices */}
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {carouselImages.map((image) => (
            <div className="w-full h-full md:h-96 py-1">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full rounded-sm"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      {/* for large devices */}
      <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
          {carouselImages.map((image) => (
            <div className="flex flex-row w-auto h-1/4 px-1 pt-1">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
