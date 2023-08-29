import React from 'react';

import './Techs.css';

import Title from '../Title/Title';

function Techs(props) {
  return(
    <section className="techs section-container">
      <Title title="Технологии" />
      <article className="techs__content">
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__stek-list">
          <li className="techs__stek-item">HTML</li>
          <li className="techs__stek-item">CSS</li>
          <li className="techs__stek-item">JS</li>
          <li className="techs__stek-item">React</li>
          <li className="techs__stek-item">Git</li>
          <li className="techs__stek-item">Express.js</li>
          <li className="techs__stek-item">mongoDB</li>
        </ul>
      </article>
    </section>
  )
}

export default Techs;