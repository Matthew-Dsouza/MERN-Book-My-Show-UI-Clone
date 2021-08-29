import React from "react";
import { Route } from "react-router";

// Layout
import DefaultLayout from "../Layouts/Default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
    // const Component = component;
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <DefaultLayout>
                        <Component {...props} />
                    </DefaultLayout>
                )}
            /> 
        </>
    );
};

export default DefaultHOC;
