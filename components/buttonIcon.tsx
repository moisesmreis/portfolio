/* eslint-disable jsx-a11y/alt-text */
import React from "react";

interface Props {
  childIcon: React.ReactNode;
}

const ButtonIcon: React.FC<Props> = ({ childIcon }) => { 
  return (
    <button className="button-icon">
      {childIcon}
    </button>
  );
}

export default ButtonIcon;
