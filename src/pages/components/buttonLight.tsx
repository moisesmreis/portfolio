/* eslint-disable jsx-a11y/alt-text */
import React from "react";

interface Props {
  childIcon: React.ReactNode;
  children: React.ReactNode;
}

const ButtonLight: React.FC<Props> = ({ children, childIcon }) => { 
  return (
    <button className="button-light">
      {childIcon}
      <span>{children}</span>
    </button>
  );
}

export default ButtonLight;
