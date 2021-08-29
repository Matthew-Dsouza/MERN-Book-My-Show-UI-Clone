import React from "react";
import Slider from "react-slick";

// Components
import Poster from "../Poster/poster.component";

// Configs
import PosterCarouselSettings from "../../Config/posterCarousel.config";

const PosterSlider = (props) => {
    const sliderConfig = props.config ? props.config : PosterCarouselSettings;
    return (
        <>
            <div className="flex flex-col justify-evenly my-2">
                <h3
                    className={`text-xl font-semibold mx-auto ${
                        props.isDark ? "text-white" : "text-gray-800"
                    }`}
                >
                    {props.title}
                </h3>
                <p
                    className={`text-sm mx-auto ${
                        props.isDark ? "text-white" : "text-gray-800"
                    }`}
                >
                    {props.subtitle}
                </p>
            </div>
            <Slider {...sliderConfig}>
                {props.images.map((image) => (
                    <Poster {...image} isDark={props.isDark} />
                ))}
            </Slider>
        </>
    );
};
export default PosterSlider;
