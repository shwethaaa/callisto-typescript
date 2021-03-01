import React from "react";
import "./Card.css";
import Image from "../../atoms/Image/Image";

interface cardProps {
  data: {
    src: string;
    title: string;
    subTitle: string;
    label1: string;
    label2: string;
  };
}

const Card = ({ data }: cardProps) => {
  return (
    <div className="row cardContainer">
      <div className="col-md-4 col-4">
        <div className="heading">{data.title}</div>
        <div className="subHeading">{data.subTitle}</div>

        <div className="labels mt-3">
          <span className="mr-3 labelText">{data.label1}</span>
          <span className="labelText">{data.label2}</span>
        </div>

        <div className="play mt-3">
          <span className="mr-3  ">
            <Image
              src="https://www.emotionallyhealthy.org/wp-content/uploads/2018/03/81097-round-play-button.png"
              width={72}
              height={72}
            />
          </span>
          <span className="playText">Play</span>
        </div>
      </div>
      <div className="col-md-7 col-7">
        <Image src={data.src} width={880} height={500} />
      </div>
    </div>
  );
};

export default Card;
