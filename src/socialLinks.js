import React, {useState} from "react";
import data from "./data";
import socialLink from "./socialLink";

const socialLinks = () => {
    const[links, setLinks] = useState(data);
    return (
      <>
        {links.map((link) => {
          return (
              <socialLink {...link}/>
          )})}
      </>
    );
}

export default socialLinks;