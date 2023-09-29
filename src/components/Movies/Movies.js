import { useEffect, useState } from 'react';

import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoviesCard from './MoviesCard/MoviesCard';
import Preloader from './Preloader/Preloader';
import NoResult from './NoResult/NoResult';

import { EMPTY_INPUT_ERR_MESSAGE } from '../../utils/constants.js';

function Movies(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [filterChecked, setFilterChecked] = useState(
    JSON.parse(localStorage.getItem('filterChecked')) || false
  );
  const [serverErr, setServerErr] = useState(false);

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
    }
  }, [foundMovies, props.countMovies]);

  useEffect(() => {
    localStorage.setItem('filterChecked', filterChecked);
    handleFilter();
  }, [filterChecked]);

  function handleChangeSearch(e) {
    setInputValue(e.target.value);
  }

  function handleChangeFilter(e) {
    setFilterChecked(e.target.checked);
  }

  function handleFilter() {
    if (filterChecked === true) {
      const filteredMovieList = foundMovies.filter((movie) => {
        return movie.duration <= 40;
      });
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovieList));
      setFoundMovies(filteredMovieList);
    } else {
      setFoundMovies(JSON.parse(localStorage.getItem('foundMovies')));
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    localStorage.setItem('inputValue', inputValue);

    let movieListFromApi = JSON.parse(localStorage.getItem('movies'));

    if (
      movieListFromApi === null ||
      Object.keys(movieListFromApi).length === 0
    ) {
      props.getMoviesFromApi();
      props.errorMessage === '' ? setServerErr(false) : setServerErr(true);
      movieListFromApi = JSON.parse(localStorage.getItem('movies'));
    };

    let foundMovieList = movieListFromApi.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    localStorage.setItem('foundMovies', JSON.stringify())
    setFoundMovies(foundMovieList);
    setIsLoading(false);

    handleFilter();

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
      <Header />
      <main className="movies">
        <SearchForm
        checked={filterChecked}
        handleFilter={handleChangeFilter}
        errorMessage={errorMessage}
        onSubmit={handleSearch}
        value={inputValue}
        onChange={handleChangeSearch}
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
        )}
      </main>
      <Footer />
    </>

  );
}

export default Movies;