/* eslint-disable jsx-a11y/alt-text */
import React from "react";

interface Props {
  childIcon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonLight: React.FC<Props> = ({ children, childIcon, onClick }) => { 
  return (
    <button className="button-light" onClick={onClick}>
      {childIcon}
      <span>{children}</span>
    </button>
  );
}

export default ButtonLight;
