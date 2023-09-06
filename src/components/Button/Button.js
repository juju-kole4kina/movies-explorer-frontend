import React from "react";

import './Button.css';

function Button(props) {
  return(
    <>
      <button type={props.type} className={`button ${props.className}`}>{props.buttonText}</button>
    </>
  );
}

export default Button;