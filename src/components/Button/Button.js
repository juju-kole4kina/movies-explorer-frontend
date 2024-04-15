import React from "react";

import './Button.css';

function Button(props) {
  return(
    <button onClick={props.onClick} type={props.type} className={`button ${props.className}`} disabled={props.disabled}>{props.buttonText}</button>
  );
}

export default Button;