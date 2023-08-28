import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/icon-logo-min.svg';

function Header(props) {
  return(
    <header className="header">
      <img className='header__logo' src={logo} alt="Логотип проекта 'Movies Explorer'" />
      <ul className='header__nav-bar'>
        <li><Link to="signup">Регистрация</Link></li>
        <li><Link to="signin">Войти</Link></li>
        <li><Link to="movies">Фильмы</Link></li>
        <li><Link to="saved-movies">Сохранённые фильмы</Link></li>
        <li><Link to="profile">Аккаунт</Link></li>
      </ul>
    </header>
  );
}

export default Header;