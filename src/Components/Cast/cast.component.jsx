import React from "react";

export const Cast = (props) => {
    return (
        <div className="flex flex-row lg:ml-14">
            <div className="flex flex-col lg:flex-wrap items-center md:px-3 w-40 ml-3 text-center">
                <div className="w-32 md:w-36 lg:w-32 lg:ml-1 h-auto mx-auto">
                    <img
                        src={props.image}
                        alt="cast member"
                        className="w-full h-full rounded"
                        // className="h-full w-full flex items-center justify-center"
                    />
                </div>
                <h1 className="text-base font-normal text-black flex flex-wrap">
                    {props.castName}
                </h1>
                <h5 className="text-sm font-normal text-gray-500 flex flex-wrap">
                    as {props.role}
                </h5>
            </div>
        </div>
    );
};

export default Cast;
