/* eslint-disable jsx-a11y/alt-text */
import React from "react";

interface Props {
    title: string;
    content: string;
}

const CardCta: React.FC<Props> = ({ title, content, ...attributes }) => {
    return (
        <div className="bg-neutral-50 relative overflow-hidden gap-6 grid justify-start content-start p-6 rounded-2xl dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600">
            <h2 className="lowercase dark:text-[#fafafa] font-medium underline">{title}</h2>
            <p className="lowercase">{content}</p>
        </div>
    );
}

export default CardCta;
