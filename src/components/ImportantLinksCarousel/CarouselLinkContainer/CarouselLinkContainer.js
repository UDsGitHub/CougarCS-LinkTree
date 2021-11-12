import React, {useState} from "react";
import {data} from "./data";
import CarouselLink from "../CarouselLink/CarouselLink";
import './CarouselLinkContainerStyles.css';

const CarouselLinkContainer = (props) => {
  const { link, desc } = props;
  const [links, setLinks] = useState(data);
  return (
    <div className="carousel-link-container-outer">
      <div className="carousel-link-container-inner">
        {links.map((lnk) => {
          return <CarouselLink {...lnk} />;
        })}
      </div>
    </div>
  );
};

export default CarouselLinkContainer;
