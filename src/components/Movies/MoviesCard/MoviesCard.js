import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard(props) {
  const location = useLocation();

  const [isSave, setSave] = useState(false);

  function toggleSaveButton() {
    setSave(!isSave);
  }

  return(
    <li className="movie-list__item">
      <article className="movie-card" aria-label="Карточка фильма">
      <div className="movie-card__text-block">
        <div className="movie-card__info">
          <h3 className="movie-card__title">{props.cardName}</h3>
          <p className="movie-card__movie-timeline">{props.timeline}</p>
        </div>
        <button type="button" onClick={toggleSaveButton} className={`movie-card__button ${isSave ? "movie-card__button_active" : ""} ${location.pathname === '/saved-movies' ? "movie-card__button_delete" : ""} button-hover`}></button>
      </div>
      <Link to={props.link} className="movie-card__link" target="_blank">
      <img className="movie-card__image" alt={props.alt} src={props.img} />
      </Link>
    </article>
    </li>
  );
}

export default MoviesCard;