/* eslint-disable jsx-a11y/alt-text */
import React from "react";

interface Props {
    children: React.ReactNode;
}

const ButtonBasic: React.FC<Props> = ({ children, ...attributes }) => {
    return (
        <button className="button-basic" {...attributes}>
            <span>{children}</span>
        </button>
    );
}

export default ButtonBasic;
