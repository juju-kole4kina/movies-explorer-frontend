import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoviesCard from './MoviesCard/MoviesCard';
// import movieList from '../../utils/movieList';

function Movies(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [getMovieList, setGetMoviList] = useState([]);
  const [errorMessage, setErrorMessasge] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [filterChecked, setFilterChecked] = useState(false);

  function handleFilter(e) {
    setFilterChecked(e.target.checked);
  }

  function handleSearch(e) {
    e.preventDefault();
    let movieList = JSON.parse(localStorage.getItem('movies'));
    let searchMovieList = movieList.filter((movie) => {
      return (movie.nameRU.toLowerCase() === inputValue.toLowerCase()) ||
      (movie.nameEN.toLowerCase() === inputValue.toLowerCase()) ||
      (movie.country.toLowerCase() === inputValue.toLowerCase()) ||
      (movie.director.toLowerCase() === inputValue.toLowerCase()) ||
      (movie.year === inputValue) || setErrorMessasge('Ничего не найдено');
    });
    setGetMoviList(searchMovieList);
    if (filterChecked === true) {
      let filterSearchMovieList = searchMovieList.filter((movie) => {
        return movie.duration <= 40;
      });
      setGetMoviList(filterSearchMovieList);
    }

    if (inputValue === '') {
      setErrorMessasge('Нужно ввести ключевое слово');
    } else {
      setErrorMessasge('');
    }
  }

  return(
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <MoviesCardList
        checked={filterChecked}
        handleFilter={handleFilter}
        errorMessage={errorMessage}
        onSubmit={handleSearch}>
        {getMovieList.map((movie) => (
        <li key={movie.id}>
          <MoviesCard
          cardName={movie.nameRU}
          timeline={props.duration(movie.duration)}
          link={movie.trailerLink}
          alt={movie.image.name}
          img={movie.image.url}
          imgMiddle={movie.image.formats.thumbnail.url}
          imgSmall={movie?.image?.formats?.small?.url}
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