/* eslint-disable jsx-a11y/alt-text */
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonCta: React.FC<Props> = ({ children, onClick }) => { 
  return (
    <button className="button-cta" onClick={onClick}>      
      <span>{children}</span>
    </button>
  );
}

export default ButtonCta;
