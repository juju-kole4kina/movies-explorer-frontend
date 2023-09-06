import React from "react";

import './Link.css';

function NavLink(props) {
  return(
    <>
      <NavLink to={props.endpoint} className={`link ${props.className}`}>{props.content}</NavLink>
    </>
  );
}

export default NavLink;