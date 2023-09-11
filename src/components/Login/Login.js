import React from 'react';

import './Login.css';
import Form from '../Form/Form';
import Input from '../Input/Input';

function Login(props) {
  return(
    <main className="login-page">
      <Form
        name="login"
        title="Рады видеть!"
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        endpoint="/signup"
        linkText="Регистрация"
      >
        <Input formName="form" name="email" id="reg-email" label="E-mail" type="email" placeholder="example@example.com" />
        <Input formName="form" name="password" id="reg-password" label="Пароль" type="password" placeholder="Введите пароль" />
      </Form>
    </main>
  );
}

export default Login;