import React from "react";

interface Props {
  children: React.ReactNode;
}

const Badge: React.FC<Props> = ({ children }) => { 
  return (
    <span className="bg-neutral-50 border-neutral-200 border text-sm font-normal px-2.5 py-0.5 rounded-full dark:bg-neutral-700 dark:text-neutral-300 dark:border-neutral-600">{children}</span>
  );
}

export default Badge;
