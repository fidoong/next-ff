import React from "react";

export const FButton = (props:{
    bgColor:string,
    label:string
}) => {
    const {bgColor,label}=props;
    return (
        <span style={{background:bgColor}}>
            <span>{label}</span>
        </span>
    )
};
