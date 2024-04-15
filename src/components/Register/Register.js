import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import './Register.css';
import Form from '../Form/Form';
import Input from '../Input/Input';

import FormValidator from '../../hook/Validator';

function Register(props) {
  const { values, handleChange, errors, isValid, resetForm } = FormValidator();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  useEffect(() => props.setErrMessage(''), [props.setErrMessage]);

  if (props.isLoggedIn === true) {
    return <Navigate to="/movies" replace />
  }

  function handleSubmit(e) {
    const { name, email, password } = values;
    e.preventDefault();
    props.isRegister({ name, email, password });
  }

  return(
    <main className="register-page">
      <Form
        name="register"
        title="Добро пожаловать!"
        buttonText={props.isLoading === false ? "Зарегистрироваться" : "Регистрация..."}
        text="Уже зарегистрированы?"
        endpoint="/signin"
        linkText="Войти"
        onSubmit={handleSubmit}
        disabled={!isValid}
        errorMessage={props.errorMessage}
        isValid={isValid}
      >
        <Input formName="form" disabled={props.isLoading} value={values.name || []} onChange={handleChange} pattern="^[а-яА-ЯёЁa-zA-Z \-]+$" errorName={errors.name || ''} name="name" id="reg-name" label="Имя" type="text" placeholder="Ваше имя" min="2" max="30" required />
        <Input formName="form" disabled={props.isLoading} value={values.email || []} onChange={handleChange} pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$" errorName={errors.email || ''} name="email" id="reg-email" label="E-mail" type="email" placeholder="example@example.com" required />
        <Input formName="form" disabled={props.isLoading} value={values.password || []} onChange={handleChange} errorName={errors.password || ''} name="password" id="reg-password" label="Пароль" type="password" placeholder="Введите пароль" min="8" max="30" required />
      </Form>
    </main>
  );
}

export default Register;