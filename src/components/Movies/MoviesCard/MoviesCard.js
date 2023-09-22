import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../Button/Button';

import './MoviesCard.css';

function MoviesCard(props) {
  const location = useLocation();

  const [isSave, setSave] = useState(false);

  function toggleSaveButton() {
    setSave(!isSave);
  }

  return(
      <article className="movie-card" aria-label="Карточка фильма">
      <div className="movie-card__text-block">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{props.cardName}</h2>
          <p className="movie-card__movie-timeline">{props.timeline}</p>
        </div>
        <Button type="button" onClick={toggleSaveButton} className={`button_type_save-card ${isSave ? "button_type_save-card-active" : ""} ${location.pathname === '/saved-movies' ? "button_type_delete-card" : ""}`} />
      </div>
      <Link to={props.link} className="movie-card__link" target="_blank">
      <img className="movie-card__image" alt={props.alt} src={`https://api.nomoreparties.co/${props.img}`} srcSet={`https://api.nomoreparties.co/${props.imgMiddle} 768w, https://api.nomoreparties.co/${props.imgSmall} 320w`} />
      </Link>
    </article>
  );
}

export default MoviesCard;