/* eslint-disable jsx-a11y/alt-text */
import React from "react";

interface Props {
  childComp?: React.ReactNode;
  children: React.ReactNode;
}

const ButtonCta: React.FC<Props> = ({ children, childComp }) => { 
  return (
    <button className="button-cta">      
      <span>{children} 👋</span>
    </button>
  );
}

export default ButtonCta;
