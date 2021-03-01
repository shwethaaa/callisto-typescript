import React from "react";
import Header from "../../organisms/Header/Header";
import Corousal from "../../organisms/Corousal/Corousal";
import Gallery from "../../organisms/Gallery/Gallery";

interface cardProps {
  src: string;
  title: string;
  subTitle: string;
  label1: string;
  label2: string;
}

interface homeProps {
  data: {
    header: {
      width: any;
      logo: string;
      height: any;
    };
    carousel: Array<cardProps>;
  };
}

const Home = ({ data }: homeProps) => {
  return (
    <React.Fragment>
      <Header banner={data.header}></Header>
      <Corousal data={data.carousel}></Corousal>
      <Gallery length={16}></Gallery>
    </React.Fragment>
  );
};

export default Home;
