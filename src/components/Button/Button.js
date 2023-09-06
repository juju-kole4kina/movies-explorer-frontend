import React from "react";

import './Button.css';

function Button(props) {
  return(
    <>
      <button type={props.type} className={`button button_type_${props.className}`}>{props.buttonText}</button>
    </>
  );
}

export default Button;