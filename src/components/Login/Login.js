import { useEffect } from 'react';

import './Login.css';
import Form from '../Form/Form';
import Input from '../Input/Input';

import FormValidator from '../../hook/Validator';

function Login(props) {
  const { values, handleChange, errors, isValid, resetForm } = FormValidator();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    const { email, password } = values;
    e.preventDefault();
    props.isLogin({ email, password });
  }

  return(
    <main className="login-page">
      <Form
        name="login"
        title="Рады видеть!"
        buttonText={props.isLoading === false ? "Войти" : "Вход..."}
        text="Ещё не зарегистрированы?"
        endpoint="/signup"
        linkText="Регистрация"
        onSubmit={handleSubmit}
        disabled={!isValid}
        errorMessage={props.errorMessage}
      >
        <Input formName="form" value={values.email || []} onChange={handleChange} errorName={errors.email || ''} pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$" name="email" id="reg-email" label="E-mail" type="email" placeholder="example@example.com" min="2" max="30" required />
        <Input formName="form" value={values.password || []} onChange={handleChange} errorName={errors.password || ''} name="password" id="reg-password" label="Пароль" type="password" placeholder="Введите пароль" min="8" max="30" required />
      </Form>
    </main>
  );
}

export default Login;