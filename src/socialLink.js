import React from "react";
function socialLink(){
    const {image, link, desc} = props;
    return (
      <>
        <a href={link}>
          <img src={image} alt={desc} />
        </a>
        <div className="hover_description">
          <p>{desc}</p>
        </div>
      </>
    );
}

export default socialLink;