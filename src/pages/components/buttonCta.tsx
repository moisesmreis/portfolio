/* eslint-disable jsx-a11y/alt-text */
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ButtonCta: React.FC<Props> = ({ children }) => { 
  return (
    <button className="button-cta">      
      <span>{children}</span>
    </button>
  );
}

export default ButtonCta;
