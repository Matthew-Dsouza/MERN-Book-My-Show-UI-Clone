import React from "react";

export const PrevArrow = (props) => {
    // const { className, style, onclick } = props;
    return (
        <>
            <span
                className={props.className}
                style={{ ...props.style}}
                onClick={props.onClick}
            />
        </>
    );
};

export const NextArrow = (props) => {
    // const { className, style, onclick } = props;
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style }}
                onClick={props.onClick}
            />
        </>
    );
};
