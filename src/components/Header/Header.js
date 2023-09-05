import React, { useState } from 'react';
import { NavLink, useLocation} from 'react-router-dom';

import './Header.css';
import logo from '../../images/icons/icon-logo-min.svg';

function Header(props) {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

 const toggleMenu = () => {
  setMobileMenuOpen(!isMobileMenuOpen);
 }

  const isLoggedNav = (
    <ul className={`menu__menu-list menu__menu-list_isLogged ${isMobileMenuOpen ? "menu__menu-list_isLogged_active" : ""}`}>
      <li className="menu__item menu__item_rigth-menu">
        <ul className="menu-rigth__menu-list">
          {location.pathname !== '/' && <li className="menu__item"><NavLink to="/" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Фильмы</NavLink></li>}
          <li className="menu__item"><NavLink to="/movies" className={({isActive}) => `menu__link link-hover ${isActive ? "menu__link_active" : ""} ${location.pathname === '/' ? "menu__link_color_white" : "menu__link_color_black"}`}>Фильмы</NavLink></li>
          <li className="menu__item"><NavLink to="/saved-movies" className={({isActive}) => `menu__link link-hover ${isActive ? "menu__link_active" : ""} ${location.pathname === '/' ? "menu__link_color_white" : "menu__link_color_black"}`}>Сохранённые фильмы</NavLink></li>
        </ul>
      </li>
      <li className="menu__item menu__item_profile link-hover"><NavLink to="/profile" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""} ${location.pathname === '/' ? "menu__link_color_white" : "menu__link_color_black"}`}>Аккаунт</NavLink></li>
    </ul>
  );

  const isNotLoggedNav = (
    <ul className={`menu__menu-list menu__menu-list_isNotLogged`}>
      <li className="menu__item"><NavLink to="/signup" className={({isActive}) => `menu__link link-hover ${isActive ? "menu__link_active" : ""} ${location.pathname === '/' ? "menu__link_color_white" : "menu__link_color_black"}`}>Регистрация</NavLink></li>
      <li className="menu__item"><NavLink to="/signin" className={({isActive}) => `menu__link menu__link_login-button link-hover ${isActive ? "menu__link_active" : ""} ${location.pathname === '/' ? "menu__link_color_white" : "menu__link_color_black"}`}>Войти</NavLink></li>
    </ul>
  );

  return(
    <header className={`header section-container ${location.pathname === '/' ? "header_theme_blue" : "header_theme_white"} ${isMobileMenuOpen === true ? "header_mobile" : ""}`}>
      <NavLink className="header__logo-link link-hover" to={"/"}>
      <img className='header__logo' src={logo} alt="Логотип проекта 'Movies Explorer'" />
      </NavLink>
      <div className={`header__burger-menu link-hover ${!isLoggedIn ? "header__burger-menu_display_none" : ""} ${isMobileMenuOpen ? "header__burger-menu_active" : ""}`} onClick={toggleMenu}>
        <span></span>
      </div>

      <nav className={`menu ${isMobileMenuOpen ? "menu_mobile-menu-active" : ""} ${isLoggedIn ? "menu_isLogged" : ""}`}>
        {isLoggedIn ? isLoggedNav : isNotLoggedNav}
      </nav>
    </header>
  );
}

export default Header;