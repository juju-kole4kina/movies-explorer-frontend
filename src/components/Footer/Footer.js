import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer(props) {
  return(
    <footer className="footer section-container">
      <div className="footer__row">
        <h3 className="footer__subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      </div>
      <div className="footer__row line"></div>
      <div className="footer__row row-bottom">
        <p className="footer__copyrigth">© 2020</p>
        <ul className="footer__link-list">
          <li className="footer__link-item link-hover"><a href="https://practicum.yandex.ru/" className="footer__link" target="_blank">Яндекс.Практикум</a></li>
          <li className="footer__link-item link-hover"><a href="https://github.com/topics/yandex-praktikum" className="footer__link" target="_blank">Github</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;