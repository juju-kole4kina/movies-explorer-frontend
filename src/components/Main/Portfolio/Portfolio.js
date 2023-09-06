import React from 'react';

import './Portfolio.css';

function Portfolio(props) {
  return(
    <section className="portfolio section-container" aria-label="Портфолио">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__project-list">
        <li className="portfolio__project-item"><span className="portfolio__project-type">Статичный сайт</span><a href="https://juju-kole4kina.github.io/how-to-learn/index.html" className="portfolio__project-link link-hover">↗</a></li>
        <li className="portfolio__project-item"><span className="portfolio__project-type">Адаптивный сайт</span><a href="https://juju-kole4kina.github.io/russian-travel/index.html" className="portfolio__project-link link-hover">↗</a></li>
        <li className="portfolio__project-item"><span className="portfolio__project-type">Одностраничное приложение</span><a href="https://juju-kole4kina.github.io/mesto-react/" className="portfolio__project-link link-hover">↗</a></li>
      </ul>
    </section>
  );
}

export default Portfolio;