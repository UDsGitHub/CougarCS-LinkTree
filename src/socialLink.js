import React from "react";
import './slink.css';
const SocialLink = (props) => {
    const {image, link, desc} = props;
    return (
      <>
        <div className="link_btn">
          <a href={link} target="_blank">
            <img src={image} alt={desc} />
          </a>
          <div className="hover_desc">
            <p>{desc}</p>
          </div>
        </div>
      </>
    );
}

export default SocialLink;