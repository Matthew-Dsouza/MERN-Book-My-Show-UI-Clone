import React, { useState } from "react";

export const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState({
        id: 0,
        original_title: "",
        overview: "",
        backdrop_path: "",
        poster_path: "",
        genres: ["", ""],
        original_language: "",
        release_date: "",
        runtime: 0,
    });

    return (
        <MovieContext.Provider value={{ movie, setMovie }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;
