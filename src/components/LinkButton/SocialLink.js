import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import "./SocialLinkButtonStyles.css";


const SocialLink = (props) => {
  const { image, link, desc, rendered, setRendered } = props;
  
  function showDesc(){
    if (rendered) {
      const description = document.getElementById(desc);
      description.classList.add("show");
    } else {
      setRendered(true);
      const description = document.getElementById(desc);
      description.classList.add("show");
    }
  }

  function hideDesc(){
    if (rendered){
      const description = document.getElementById(desc);
      description.classList.remove("show");
    }
  }

  return (
    <>
      <div className="link-btn">
        <a href={link} target="_blank" className="btn" onMouseEnter={showDesc} onMouseLeave={hideDesc}>
          <img src={image} alt={desc} />
        </a>
        <div className="hover-desc" id={desc}>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default SocialLink;
