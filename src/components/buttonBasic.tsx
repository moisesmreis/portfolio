/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface Props {
    children: React.ReactNode;
}

const ButtonBasic: React.FC<Props> = ({ children, ...attributes }) => {
    return (
        <button className="flex flex-row gap-4 justify-start content-center items-center text-sm underline" {...attributes}>
            <span>{children}</span>
            <ArrowRightIcon />
        </button>
    );
}

export default ButtonBasic;
