import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../Button/Button';

import './MoviesCard.css';

function MoviesCard(props) {
  const {
    savedMovies,
    handleSavedMovies,
    movie,
    handleDelete,
    cardName,
    timeline,
    link,
    alt,
    img,
    imgMiddle,
    imgSmall,
    savedMovieItem
  } = props;

  const location = useLocation();

  const [isSave, setSave] = useState(false);

  let isLike =
  savedMovies !== undefined &&
  savedMovies.some((i) => i.movieId === movie.id);

  function handleCardClick() {
    if (!isLike) {
      handleSavedMovies(movie);
      setSave(true);
    } else {
      handleDelete(movie);
      setSave(false);
    }
  }

  function handleCardDelete() {
    handleDelete(savedMovieItem);
  }

  return(
      <article className="movie-card" aria-label="Карточка фильма">
      <div className="movie-card__text-block">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{cardName}</h2>
          <p className="movie-card__movie-timeline">{timeline}</p>
        </div>
        <Button
          type="button"
          onClick={
            location.pathname === "/movies" ? handleCardClick : handleCardDelete
          }
          className={`button_type_save-card ${
            isLike === true || isSave === true
              ? "button_type_save-card-active"
              : ""
            } ${
              location.pathname === '/saved-movies'
                ? "button_type_delete-card"
                : ""
            }`}
        />
      </div>
      <a href={link} className="movie-card__link" target="_blank" rel="noreferrer">
      <img
        className="movie-card__image"
        alt={alt}
        src={
          location.pathname === "/movies"
          ? `https://api.nomoreparties.co/${img}`
          : `${img}`
        }
        srcSet={
          location.pathname === "/movies"
          ? `https://api.nomoreparties.co/${imgMiddle} 768w, https://api.nomoreparties.co/${imgSmall} 320w`
          : `${imgMiddle} 768w, ${imgSmall} 320w`
        }
      />
      </a>
    </article>
  );
}

export default MoviesCard;