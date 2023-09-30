import { useEffect, useState } from 'react';

import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoviesCard from './MoviesCard/MoviesCard';
import Preloader from './Preloader/Preloader';
import NoResult from './NoResult/NoResult';
import filterMovies from '../../utils/filter';

import { EMPTY_INPUT_ERR_MESSAGE } from '../../utils/constants.js';

function Movies(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [filterChecked, setFilterChecked] = useState(
    JSON.parse(localStorage.getItem('filterChecked')) || false
  );
  const [serverErr, setServerErr] = useState(false);

  const [moviesFromApi, setMoviesFromApi] = useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [foundMovies, setFoundMovies] = useState(
    JSON.parse(localStorage.getItem('foundMovies')) || []
  );
  const [showedMovies, setShowedMovies] = useState([]);
  const [hiddenMovies, setHiddenMovies] = useState([]);

  const [inputValue, setInputValue] = useState(
    JSON.parse(localStorage.getItem('inputValue')) || ''
  );
  const [errorMessage, setErrorMessasge] = useState('');

  useEffect(() => {
    if (foundMovies !== null && Object.keys(foundMovies).length !== 0) {
      setShowedMovies(foundMovies.slice(0, props.countMovies));
      setHiddenMovies(foundMovies.slice(props.countMovies));
    } else {
      setShowedMovies([]);
    }
  }, [foundMovies, props.countMovies]);

  useEffect(() => {
    const shortMovies = filterMovies(moviesFromApi, inputValue, filterChecked);
    setFoundMovies(shortMovies);
    localStorage.setItem('filterChecked', filterChecked);
  }, [filterChecked]);

  function handleChangeSearch(e) {
    setInputValue(e.target.value);
  }

  function handleChangeFilter(e) {
    setFilterChecked(e.target.checked);
  }

  function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    localStorage.setItem('inputValue', inputValue);

    let movieListFromApi = JSON.parse(localStorage.getItem('movies'));
    setMoviesFromApi(movieListFromApi);

    if (
      movieListFromApi === null ||
      Object.keys(movieListFromApi).length === 0
    ) {
      props.getMoviesFromApi();
      props.errorMessage === '' ? setServerErr(false) : setServerErr(true);
      movieListFromApi = JSON.parse(localStorage.getItem('movies'));
      setMoviesFromApi(movieListFromApi);
    };

    let foundMovieList = filterMovies(movieListFromApi, inputValue, filterChecked);
    localStorage.setItem('foundMovies', JSON.stringify(foundMovieList));
    setFoundMovies(foundMovieList);

    setIsLoading(false);

    if (inputValue === '') {
      setErrorMessasge(EMPTY_INPUT_ERR_MESSAGE);
    } else {
      setErrorMessasge('');
    }
  }

  function handleShowMore(e) {
    const showedMoviesAlso = [ ...showedMovies, ...hiddenMovies.slice(0, props.countMoviesAlso)];

    setShowedMovies(showedMoviesAlso);
    setHiddenMovies(hiddenMovies.slice(props.countMoviesAlso));
  }

  return(
    <>
      <Header isLoggedIn={props.isLoggedIn} />
      <main className="movies">
        <SearchForm
        checked={filterChecked}
        onChangeFilter={handleChangeFilter}
        onChange={handleChangeSearch}
        errorMessage={errorMessage}
        onSubmit={handleSearch}
        value={inputValue}
        />
        {isLoading === true ? <Preloader /> : null}
        {(showedMovies === null || Object.keys(showedMovies).length === 0) &&
        !isLoading ? (
          <NoResult serverErr={serverErr} />
        ) : (
          <MoviesCardList
            movies={showedMovies}
            handleShowMore={handleShowMore}
            hiddenMovies={hiddenMovies}
          >
          {showedMovies.map((movie) => (
            <li key={movie.id}>
              <MoviesCard
                movie={movie}
                cardName={movie.nameRU}
                timeline={props.duration(movie.duration)}
                link={movie.trailerLink}
                alt={movie.image.name}
                img={movie.image.url}
                imgMiddle={movie.image.formats.thumbnail.url}
                imgSmall={movie?.image?.formats?.small?.url}
                savedMovies={props.savedMovies}
                handleDelete={props.onDeleted}
                handleSavedMovies={props.onSaved}
              />
            </li>
          ))}
          </MoviesCardList>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;