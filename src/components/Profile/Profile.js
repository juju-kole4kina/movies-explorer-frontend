import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Profile.css';
import Header from '../Header/Header';
import Input from '../Input/Input';

import { CurrentUserContext } from '../../context/CurrentUserCotext';

function Profile(props) {
const currentUser = useContext(CurrentUserContext);

const [isEditProfile, setEditProfile] = useState(false);
const [name, setName] = useState('');
const [email, setEmail] = useState('');

useEffect(() => {
  if (currentUser.name) {
    setName(currentUser.name);
  }

  if (currentUser.email) {
    setEmail(currentUser.email);
  }
}, [currentUser])

function handleEditProfileClick() {
  setEditProfile(true);
}

function handleNameChange(e) {
  setName(e.target.value);
}

function handleEmailChange(e) {
  setEmail(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  props.onUpdateUser({
    name,
    email,
  });
}

  return(
    <>
    < Header />
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
        <form method="POST" className={`profile__form-container ${isEditProfile ? "profile__form-container_active" : ""}`}>
          <fieldset className="profile__input profile-input-list">
            <Input name="name" value={isName} onChange={handleNameChange} id="input-name" label="Имя" type="text" placeholder="Ваше имя" min="2" max="30" formName="profile" />
            <Input name="email" value={isEmail} onChange={handleEmailChange} id="imput-email" label="Email" type="email" placeholder="example@example.ru" formName="profile" />
          </fieldset>
          <div className="profile__form-footer">
            <span className="profile__error-message">{props.errorName}</span>
            <button type="submit" className="profile__submit-button button-hover">Сохранить</button>
          </div>
        </form>
      </section>

    </main>
  </>
  );

}

export default Profile;