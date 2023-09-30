import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../Button/Button';
import './MoviesCardList.css';

function MoviesCardList(props) {
  const location = useLocation();

  return(
    <section
      className="movie-list-section section-container"
      aria-label="Список фиьмов"
    >
      <ul className="movie-list">
        {props.children}
      </ul>
      <Button
        type="button"
        className={`button_type_more ${
          (location.pathname === '/saved-movies' ||
            props.hiddenMovies.length === 0)
            ? "button_type_more-disabled" : ""
          }`}
          onClick={props.handleShowMore}
          buttonText="Ещё"
        />
    </section>
  );
}

export default MoviesCardList;