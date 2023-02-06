/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  childComp?: React.ReactNode;
  children: React.ReactNode;
}

const ButtonCta: React.FC<Props> = ({ children, childComp }) => { 
  return (
    <button className="button-cta">      
      <span>{children}</span>
      {childComp}
    </button>
  );
}

export default ButtonCta;
