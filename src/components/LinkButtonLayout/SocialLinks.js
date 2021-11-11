import React, { useState } from "react";
import { links } from "./data";
import SocialLink from "../LinkButton/SocialLink";
import './SocialLinksStyles.css';

const SocialLinks = () => {
  const [isRendered, setIsRendered] = useState(false);
  const [slinks, setLinks] = useState(links);
  return (
    <>
      <div className="link-container">
        {slinks.map((link) => {
          return <SocialLink {...link} className="social-link" rendered={isRendered} setRendered={setIsRendered}/>;
        })}
      </div>
    </>
  );
};

export default SocialLinks;
