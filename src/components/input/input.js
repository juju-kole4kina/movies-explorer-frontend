import React from 'react';

import './Input.css';

function Input(props) {
  return(
    <div className="form__input">
      <label className={`input__label input__label_type_${props.name}`} for={props.id}>{props.label}</label>
      <input type={props.type} className={`input input_type_${props.name}`} name={props.name} id={props.id} plaseholder={props.placeholder} minLength={props.min} maxLength={props.max} required />
      <span className={`input__input-error ${props.name}-error`}></span>
    </div>
  );
}

export default Input;