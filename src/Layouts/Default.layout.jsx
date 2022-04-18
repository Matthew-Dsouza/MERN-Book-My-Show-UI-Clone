import React from "react";

// Components
import Navbar from "../Components/Navbar/navbar.component";
import HeroCarousel from "../Components/HeroCarousel/heroCarousel.component";

const DefaultLayout = (props) => { 
    return (
        <div>
            <Navbar />
            <HeroCarousel />
            {props.children}
        </div>
    );
};

export default DefaultLayout;
