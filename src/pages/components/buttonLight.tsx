/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

interface Props {
  image?: string,
  children: React.ReactNode;
}

const ButtonLight: React.FC<Props> = ({ children, image }) => { 
  return (
    <button className="button-light">
      <Image className="button-light-img" src={image}></Image>
      <span>{children}</span>
    </button>
  );
}

export default ButtonLight;
