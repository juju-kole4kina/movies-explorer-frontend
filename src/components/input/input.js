import React from 'react';

import './Input.css';

function Input(props) {
  return(
    <div className={`form__input form__input_type_${props.formName}`}>
      <label className={`input__label input__label_type_${props.formName}`} for={props.id}>{props.label}</label>
      <input type={props.type} className={`input input_type_${props.formName}`} name={props.name} id={props.id} placeholder={props.placeholder} minLength={props.min} maxLength={props.max} required />
      <span className={`input__input-error ${props.name}-error input__input-error_type_${props.formName}`}></span>
    </div>
  );
}

export default Input;