import React from "react";

interface IProps {
  altText?: string;
  src: string;
  width: any;
  height?: any;
}

const Image = ({ altText, src, width, height }: IProps) => {
  return <img alt={altText} src={src} width={width} height={height} />;
};

export default Image;
