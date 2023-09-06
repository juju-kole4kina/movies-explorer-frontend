import React from "react";

import './Link.css';

function Link(props) {
  return(
    <>
      <Link to={props.endpoint} className={`link link_type_${props.className}`}>{props.content}</Link>
    </>
  );
}

export default Link;