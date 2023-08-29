import React from 'react';

import logoPromo from '../../../images/landing-logo.png';

import './Promo.css';

function Promo(props) {
  return(
    <section className="promo section-container">
      <div className="promo__content">
        <h1 className="propmo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <button type="button" className="promo__more-button link-hover">Узнать больше</button>
      </div>
      <img src={logoPromo} className="promo__logo" alt="Логотип промо секции" />
    </section>
  );
}

export default Promo;