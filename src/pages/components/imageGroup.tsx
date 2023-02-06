/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
    image_left: string | StaticImageData;
    image_middle: string | StaticImageData;
    image_right: string | StaticImageData;
    width?: number,
    height?: number,
}

const ImageGroup: React.FC<Props> = ({ image_left, image_middle, image_right, width, height }) => {
    return (
        <div className="image-group-flex">
            <Image className="image-group-img-left" src={image_left} alt="Left" width={width} height={height}></Image>
            <Image className="image-group-img-middle" src={image_middle} alt="Middle" width={width} height={height}></Image>
            <Image className="image-group-img-right" src={image_right} alt="Right" width={width} height={height}></Image>
        </div>
    );
}

export default ImageGroup;
