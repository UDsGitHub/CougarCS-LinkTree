import React from 'react';
import './CarouselLinkStyles.css';

const CarouselLink = (props) => {
    const {link, desc} = props;
    return (
      <>
        <a href={link} target="_blank" className="carousel-btn">{desc}</a>
      </>
    );
}

export default CarouselLink;