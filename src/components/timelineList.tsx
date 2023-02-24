/* eslint-disable jsx-a11y/alt-text */
import React from "react";

interface Props {
    emoji: React.ReactNode;
    year: React.ReactNode;
    title: React.ReactNode;
    place: React.ReactNode;
    content: React.ReactNode;
}

const TimelineList: React.FC<Props> = ({ year, emoji, title, place, content, ...attributes }) => {
    return (
        <li className="ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-white dark:ring-[#292b2f] dark:bg-[#292b2f]">{emoji}</span>
            <div className="p-4 bg-white border border-neutral-200 rounded-lg dark:bg-neutral-700 dark:border-neutral-600">
                <div className="items-center justify-between mb-3 sm:flex">
                    <time className="mb-1 text-xs font-normal text-neutral-400 sm:order-last sm:mb-0">{year}</time>
                    <div className="text-sm font-normal text-neutral-500 dark:text-neutral-300">{title} <span className="font-semibold text-[#6e57b2] dark:text-white">{place}</span></div>
                </div>
                <div className="p-3 text-xs italic font-normal text-neutral-500 border border-neutral-200 rounded-lg bg-neutral-50 dark:bg-neutral-600 dark:border-neutral-500 dark:text-neutral-300">{content}</div>
            </div>
        </li>
    );
}

export default TimelineList;
