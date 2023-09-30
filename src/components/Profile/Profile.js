import React, { useContext, useEffect, useState } from 'react';

import './Profile.css';
import Header from '../Header/Header';
import Input from '../Input/Input';

import { CurrentUserContext } from '../../context/CurrentUserCotext';

import FormValidator from '../../hook/Validator';

function Profile(props) {
const currentUser = useContext(CurrentUserContext);

const { values, setValues, handleChange, errors, isValid } = FormValidator();

const [isEditProfile, setEditProfile] = useState(false);

useEffect(() => {
  setValues({
    name: currentUser.name,
    email: currentUser.email
  })
}, [setValues, currentUser.name, currentUser.email])

function handleEditProfileClick() {
  setEditProfile(true);
}

const notDisabledBtn = isValid && (values.name !== currentUser.name || values.email !== currentUser.email);

function handleSubmit(e) {
  const { name, email } = values;
  e.preventDefault();
  props.onUpdateUser({
    name,
    email,
  });
  setEditProfile(false);
}

  return(
    <>
    < Header isLoggedIn={props.isLoggedIn} />
    <main className="profile">
      <section className="profile__section">
        <h2 className="profile-header">Привет, {currentUser.name}!</h2>
        <div className={`profile__data-container ${isEditProfile ? "profile__data-container_active" : ""}`}>
          <ul className="profile__data-list">
            <li className="profile__data-item">
              <p className="profile__data-item-name">Имя</p>
              <p className="profile__data-item-value">{currentUser.name}</p>
            </li>
            <li className="profile__data-item">
              <p className="profile__data-item-name">E-mail</p>
              <p className="profile__data-item-value">{currentUser.email}</p>
            </li>
          </ul>
          <div className="profile__buttons">
              <button type="button" className="profile__button link-hover" onClick={handleEditProfileClick}>Редактировать</button>
              <button type="button" className="profile__button profile__button_type_exit link-hover" onClick={props.isSignout}>Выйти из аккаунта</button>
            </div>
        </div>
        <form onSubmit={handleSubmit} method="POST" className={`profile__form-container ${isEditProfile ? "profile__form-container_active" : ""}`}>
          <fieldset className="profile__input profile-input-list">
            <Input name="name" value={values.name || []} onChange={handleChange} pattern="^[а-яА-ЯёЁa-zA-Z \-]+$" id="input-name" label="Имя" type="text" placeholder="Ваше имя" min="2" max="30" formName="profile" required />
            <Input name="email" value={values.email || []} onChange={handleChange} pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$" id="imput-email" label="Email" type="email" placeholder="example@example.ru" formName="profile" required />
          </fieldset>
          <div className="profile__form-footer">
            <span className="profile__error-message">{props.errMessage || errors.name || errors.email || ''}</span>
            <button type="submit" className={`profile__submit-button ${notDisabledBtn ? "button-hover" : 'button_type_disabled'} `} disabled={notDisabledBtn ? false : true}>{props.isLoading === false ?"Сохранить" : "Сохранение..."}</button>
          </div>
        </form>
      </section>

    </main>
  </>
  );

}

export default Profile;