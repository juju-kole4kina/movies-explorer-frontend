import { useEffect, useState } from 'react';

import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoviesCard from './MoviesCard/MoviesCard';
import Preloader from './Preloader/Preloader';
import NoResult from './NoResult/NoResult';

function Movies(props) {
  const [isLoading, setIsLoading] = useState(false);

  const [getMovieList, setGetMoviList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filterChecked, setFilterChecked] = useState(false);
  const [errorMessage, setErrorMessasge] = useState('');

  const [showedMovies, setShowedMovies] = useState([]);
  const [hiddenMovies, setHiddenMovies] = useState([]);

  useEffect(() => {
    setShowedMovies(getMovieList.slice(0, props.countMovies));
    setHiddenMovies(getMovieList.slice(props.countMovies));
  }, [getMovieList, props.countMovies]);

  function onChangeInputSearch(e) {
    setInputValue(e.target.value);
  }

  function handleFilter(e) {
    setFilterChecked(e.target.checked);
  }

  function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    let movieList = JSON.parse(localStorage.getItem('movies'));
    let searchMovieList = movieList.filter((movie) => {
      return (movie.nameRU.toLowerCase() === inputValue.toLowerCase()) ||
      (movie.nameEN.toLowerCase() === inputValue.toLowerCase()) ||
      (movie.country.toLowerCase() === inputValue.toLowerCase()) ||
      (movie.director.toLowerCase() === inputValue.toLowerCase()) ||
      (movie.year === inputValue) || setErrorMessasge('Ничего не найдено');
    });
    setGetMoviList(searchMovieList);
    setIsLoading(false);
    if (filterChecked === true) {
      let filterSearchMovieList = searchMovieList.filter((movie) => {
        return movie.duration <= 40;
      });
      setGetMoviList(filterSearchMovieList);
      setIsLoading(false);
    }

    if (inputValue === '') {
      setErrorMessasge('Нужно ввести ключевое слово');
    } else {
      setErrorMessasge('');
    }
  }

  function showMore(e) {
    const showedMoviesAlso = [ ...showedMovies, ...hiddenMovies.slice(0, props.countMoviesAlso)];

    setShowedMovies(showedMoviesAlso);
    setHiddenMovies(hiddenMovies.slice(props.countMoviesAlso));
  }

  return(
    <>
      <Header />
      <main className="movies">
        <SearchForm
        checked={filterChecked}
        handleFilter={handleFilter}
        errorMessage={errorMessage}
        onSubmit={handleSearch}
        value={inputValue}
        onChange={onChangeInputSearch}
        />
        {isLoading === true ? <Preloader /> : null}
        {showedMovies === null ? <NoResult /> : null}
        <MoviesCardList
        movies={showedMovies}
        handleShowMore={showMore}
        hiddenMovies={hiddenMovies}
        >
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