// import React from "react";

// // Components
// import {
//     PrevArrow,
//     NextArrow,
// } from "../Components/HeroCarousel/arrows.component";

// var settings = {
//     dots: false,
//     infinity: false,
//     autoplay: false,
//     slidesToShow: 6,
//     slidesToScroll: 2,
//     InitialSlide: 0,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 5,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: false,
//             },
//         },
//         {
//             breakpoint: 780,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 InitialSlide: 1,
//                 dots: false,
//             },
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 dots: false,
//             },
//         },
//     ],
// };

// export default settings;

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};

export default settings;
