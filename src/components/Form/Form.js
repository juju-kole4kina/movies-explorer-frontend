import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import './Form.css';

function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return(
    <section className="section-form">
      <Logo />
      <form className={`form form-input-list form_type_${props.name}`} name={props.name} onSubmit={handleSubmit}>
        <h2 className="form__title">{props.title}</h2>
        {props.children}
        <div className="form__bottom">
        <span className="form__error-message">{props.errorMessage || ''}</span>
          <Button type="submit" className={`button_type_form-submit ${props.isValid === false ? "button_type_disabled" : "button-hover"}`} buttonText={props.buttonText} disabled={props.disabled} />
          <p className={`form__footer form__footer_type_${props.name}`}>{props.text}<Link to={props.endpoint} className="form__footer-link link-hover">{props.linkText}</Link></p>
        </div>
      </form>
    </section>

  );
}

export default Form;