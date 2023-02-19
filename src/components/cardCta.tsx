/* eslint-disable jsx-a11y/alt-text */
import React from "react";

interface Props {
    title: string;
    content: string;
}

const CardCta: React.FC<Props> = ({ title, content, ...attributes }) => {
    return (
        <div className="bg-neutral-50 grid-sub-nav">
            <h2 className="title-nav">{title}</h2>
            <p className="lowercase">{content}</p>
        </div>
    );
}

export default CardCta;
