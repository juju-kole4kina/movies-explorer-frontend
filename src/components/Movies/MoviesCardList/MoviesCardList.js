import React from 'react';
import { useLocation } from 'react-router-dom';
import movieList from '../../../utils/movieList';
import NoResult from '../NoResult/NoResult';
import Button from '../../Button/Button';
import './MoviesCardList.css';

function MoviesCardList(props) {
  const location = useLocation();

  function handleShowMore() {}
  return(
    <section className="movie-list-section section-container" aria-label="Список фиьмов">
      {movieList.length > 0 ?
      (<ul className="movie-list">
        {props.children}
      </ul>) :
      (<NoResult />)}
      <Button type="button" className={`button_type_more ${location.pathname === '/saved-movies' ? "button_type_more-disabled" : ""}`} onClick={handleShowMore} buttonText="Ещё" />
    </section>
  );
}

export default MoviesCardList;