import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import logoPromo from '../../../images/landing-logo.png';
import Button from '../../Button/Button';

import './Promo.css';

function Promo(props) {
  return(
    <section className="promo section-container">
      <div className="promo__content">
        <h1 className="propmo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <Link to="about-project" spy={true} smooth={true} className="promo__learn-more-button button-hover">Узнать больше</Link>
      </div>
      <img src={logoPromo} className="promo__logo" alt="Логотип промо секции" />
    </section>
  );
}

export default Promo;