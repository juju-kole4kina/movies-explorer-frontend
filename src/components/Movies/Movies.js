import React from 'react';

import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import NoResult from './NoResult/NoResult';
import MoviesCard from './MoviesCard/MoviesCard';
import movieList from '../../utils/movieList';

function Movies(props) {
  return(
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <MoviesCardList>
        {movieList.map((movie) => (
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

export default Movies;