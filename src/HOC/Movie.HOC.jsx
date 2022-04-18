import React from "react";
import { Route } from "react-router";

// Layout
import MovieLayout from "../Layouts/Movie.layout";

const MovieHOC = ({ component: Component, ...rest }) => {
    // const Component = component;
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <MovieLayout>
                        <Component {...props} />
                    </MovieLayout>
                )}
            /> 
        </>
    );
};

export default MovieHOC;
