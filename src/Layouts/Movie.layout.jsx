import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";

// Components
import MovieNavbar from "../Components/Navbar/movieNavbar.component";

// Context
import { MovieContext } from "../Context/movie.context";

// Context
// import { MovieContext } from "../Context/movie.context";

const MovieLayout = (props) => {
    const { movieID } = useParams();
    const { movie, setMovie } = useContext(MovieContext);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${movieID}`);
            setMovie(getMovieData.data);
        };

        requestMovie();
    }, [movieID]);

    return (
        <>
            <div>
                <MovieNavbar />
                {props.children}
            </div>
        </>
    );
};
export default MovieLayout;
