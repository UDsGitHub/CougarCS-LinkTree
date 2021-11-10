import React, { useState } from "react";
import { links } from "./data";
import SocialLink from "./SocialLink";

const SocialLinks = () => {
  const [slinks, setLinks] = useState(links);
  return (
    <>
      {slinks.map((link) => {
        return <SocialLink {...link} className="social_link" />;
      })}
    </>
  );
};

export default SocialLinks;
