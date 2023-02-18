/* eslint-disable jsx-a11y/alt-text */
import React from "react";

interface Props {
  childIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonMain: React.FC<Props> = ({ children, childIcon, onClick, ...attributes }) => { 
  return (
    <button className="button-main" onClick={onClick} {...attributes}>
      {childIcon}
      <span>{children}</span>
    </button>
  );
}

export default ButtonMain;
