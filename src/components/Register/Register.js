import React from 'react';

import './Register.css';
import Form from '../Form/Form';
import Input from '../Input/Input';

function Register(props) {
  return(
    <div className="register-page">
      <Form
        name="register"
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        endpoint="/signin"
        linkText="Войти"
      >
        <Input name="name" id="reg-name" label="Имя" type="text" placeholder="Ваше имя" min="2" max="30" />
        <Input name="email" id="reg-email" label="E-mail" type="email" placeholder="example@example.com" />
        <Input name="password" id="reg-password" label="Пароль" type="password" placeholder="Введите пароль" />
      </Form>
    </div>
  );
}

export default Register;