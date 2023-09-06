import React from 'react';

import './MoviesCardList.css';
import Button from '../../Button/Button';

function MoviesCardList(props) {

  function handleShowMore() {}

  return(
    <section className="movie-list-section section-container">
      <ul className="movie-list">
        {props.children}
      </ul>
        <Button type="button" className="button_type_more" onClick={handleShowMore} buttonText="Ещё" />
    </section>
  );
}

export default MoviesCardList;