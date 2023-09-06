import React from 'react';

import './MoviesCardList.css';

function MoviesCardList(props) {

  function handleShowMore() {}

  return(
    <section className="movie-list-section section-container">
      <ul className="movie-list">
        {props.children}
      </ul>
      <button type="button" className="button button_type_more button-hover" onClick={handleShowMore}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;