import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import './Form.css';

function Form(props) {
  return(
    <section className="section-form">
      <Logo />
      <form action="" className={`form form_type_${props.name}`} name={props.name} noValidate={true}>
        <h2 className="form__title">{props.title}</h2>
        {props.children}
        <div className="form__bottom">
          <Button type="submit" className="button_type_form-submit" buttonText={props.buttonText} />
          <p className={`form__footer form__footer_type_${props.name}`}>{props.text}<Link to={props.endpoint} className="form__footer-link link-hover">{props.linkText}</Link></p>
        </div>
      </form>
    </section>

  );
}

export default Form;