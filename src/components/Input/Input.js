import React from 'react';

import './Input.css';

function Input(props) {
  return(
    <div className={`${props.formName}-input-list__input`}>
      <label className={`${props.formName}-input-list__item input-label input-label_type_${props.formName}`} htmlFor={props.id}>{props.label}</label>
      <input type={props.type} className={`${props.formName}-input-list__item input input_type_${props.formName}`} name={props.name} id={props.id} placeholder={props.placeholder} minLength={props.min} maxLength={props.max} required />
      <span className={`${props.formName}-input-list__item input-error ${props.name}-error input-error_type_${props.formName}`}></span>
    </div>
  );
}

export default Input;