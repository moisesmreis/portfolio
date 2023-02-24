/* eslint-disable jsx-a11y/alt-text */
import React from "react";

interface Props {
  childIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonMain: React.FC<Props> = ({ children, childIcon, onClick, ...attributes }) => { 
  return (
    <button className="flex flex-row gap-3 items-center justify-center content-center text-neutral-900 bg-white border border-neutral-200 focus:outline-none hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-200 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 dark:focus:ring-neutral-700" onClick={onClick} {...attributes}>
      {childIcon}
      <span>{children}</span>
    </button>
  );
}

export default ButtonMain;
