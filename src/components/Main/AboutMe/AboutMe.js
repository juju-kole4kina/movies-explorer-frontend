import React from 'react';
import { Link } from 'react-router-dom';

import './AboutMe.css';
import myPhoto from '../../../images/photo-min.jpg';

import Title from '../Title/Title';

function AboutMe(props) {
  return(
    <section className="about-me section-container">
      <Title title="Студент" />
      <div className="about-me__content">
        <article className="about-me__text-content">
        <h3 className="about-me__subtitle">Юлия</h3>
        <p className="about-me__description">Фронтенд-разработчик, 27 лет</p>
        <p className="about-me__text">
        Я родилась и живу в Клининграде, закончила механико-технологический факультет КГТУ. Люблю вязать, "Skyrim", Толкина и котиков. Работала в сфере общепита до наступления пандемии. После окончания курсов планирую заняться фрилансом или удалённой работой в офисе как начинающий фронтенд-разработчик.
        </p>
        <a href="https://github.com/juju-kole4kina" className="about-me__link link-hover" target="_blank">Github</a>
        </article>
        <img src={myPhoto} className="about-me__photo" alt="Фото разработчика" />
      </div>

    </section>
  );
}

export default AboutMe;