import React from "react";
import Card from "../../molecules/Card/Card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface corousalProps {
  data: Array<cardProps>;
}

interface cardProps {
  src: string;
  title: string;
  subTitle: string;
  label1: string;
  label2: string;
}

const Corousal = ({ data }: corousalProps) => {
  return (
    <Carousel
      axis="horizontal"
      showArrows={true}
      showThumbs={true}
      className="carousel-container"
      autoPlay={true}
    >
      {data.map((cardData: cardProps, index) => {
        return <Card data={cardData} key={index}></Card>;
      })}
    </Carousel>
  );
};

export default Corousal;
