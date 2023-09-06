import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './MoviesCard.css';
// import Button from '../../Button/Button';

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
        <button type="button" onClick={toggleSaveButton} className={`button button_type_save-card ${isSave ? "button_type_save-card-active" : ""} ${location.pathname === '/saved-movies' ? "button_type_delete-card" : ""} button-hover`}></button>
        {/* <Button type="button" onClick={toggleSaveButton} className={`button_type_save-card ${isSave ? "button_type_save-card-active" : ""} ${location.pathname === '/saved-movies' ? "button_type_delete-card" : ""}`} /> */}
      </div>
      <Link to={props.link} className="movie-card__link" target="_blank">
      <img className="movie-card__image" alt={props.alt} src={props.img} />
      </Link>
    </article>
    </li>
  );
}

export default MoviesCard;