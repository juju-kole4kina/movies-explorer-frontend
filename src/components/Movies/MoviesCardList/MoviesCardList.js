import React from 'react';
import movieList from '../../../utils/movieList';
import NoResult from '../NoResult/NoResult';
import Button from '../../Button/Button';
import './MoviesCardList.css';

function MoviesCardList(props) {


  function handleShowMore() {}
  return(
    <section className="movie-list-section section-container" aria-label="Список фиьмов">
      {movieList.length > 0 ?
      (<ul className="movie-list">
        {props.children}
      </ul>) :
      (<NoResult />)}
        <Button type="button" className="button_type_more" onClick={handleShowMore} buttonText="Ещё" />
    </section>
  );
}

export default MoviesCardList;