import React, { useState } from "react";
import {data} from './data';
import SocialLink from "../SocialLinks/SocialLink";
import './SocialLinksContainerStyles.css';

const SocialLinksContainer = () => {
  const [isRendered, setIsRendered] = useState(false);
  const [slinks, setLinks] = useState(data);
  return (
    <div className="link-container">
      {slinks.map((link) => {
        return (
          <SocialLink
            {...link}
            className="social-link"
            rendered={isRendered}
            setRendered={setIsRendered}
          />
        );
      })}
    </div>
  );
};

export default SocialLinksContainer;
