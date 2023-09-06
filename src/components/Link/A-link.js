import React from "react";

import './Link.css';

function ALink(props) {
  return(
    <>
      <a href={props.url} className={`link ${props.className}`} target="_blank">{props.content}</a>
    </>
  );
}

export default ALink;