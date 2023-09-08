import React from 'react';

import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import SearchForm from '../Movies/SearchForm/SearchForm';
import savedMovieList from '../../utils/savedMovieList';

function SavedMovies(props) {
  return(
    <>
      <Header />
      <main className="save-movies">
        <SearchForm />
        <MoviesCardList>
          {savedMovieList.map((movie) => (
            <li key={movie._id}>
              <MoviesCard
              cardName={movie.cardName}
              timeline={movie.timeline}
              link={movie.link}
              alt={movie.alt}
              img={movie.img}
              />
          </li>
          ))}
        </MoviesCardList>
      </main>
      <Footer />
    </>

  );
}

export default SavedMovies;