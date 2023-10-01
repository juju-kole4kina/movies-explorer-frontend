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
// import FormValidator from '../../hook/Validator';
import { filterMoviesByName, filterShorts } from '../../utils/filter';

import { EMPTY_INPUT_ERR_MESSAGE } from '../../utils/constants.js';

function Movies(props) {

  const [isLoading, setIsLoading] = useState(false);
  const [filterChecked, setFilterChecked] = useState(
    JSON.parse(localStorage.getItem('filterChecked')) || false
  );
  let [allMoviesFromApi, setAllMoviesFromApi] = useState([]);
  const [serverErr, setServerErr] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [foundByNameMovies, setFoundByNameMovies] = useState(
    JSON.parse(localStorage.getItem('foundMovies')) || []
  );

  const [resultFilteredMovies, setResultFilteredMovies] = useState([]);//на вывод

  const [showedMovies, setShowedMovies] = useState([]);
  const [hiddenMovies, setHiddenMovies] = useState([]);

  const [inputValue, setInputValue] = useState(
    localStorage.getItem('inputValue') || ''
  );
  const [errorMessage, setErrorMessasge] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
      setShowedMovies(resultFilteredMovies.slice(0, props.countMovies));
      setHiddenMovies(resultFilteredMovies.slice(props.countMovies));
  }, [resultFilteredMovies, props.countMovies]);

  useEffect(() => {
    const filteredShorts = filterShorts(foundByNameMovies, filterChecked)
    setResultFilteredMovies(filteredShorts)
    localStorage.setItem('filterChecked', filterChecked);
  }, [filterChecked, foundByNameMovies]);

  useEffect(() => {
    if (allMoviesFromApi != null && Object.keys(allMoviesFromApi).length > 0)
    {
      setResults(allMoviesFromApi)
    }
  }, [allMoviesFromApi])

  function handleChangeSearch(e) {
    setInputValue(e.target.value);
  }

  function handleChangeFilter(e) {
    setFilterChecked(e.target.checked);
  }

  function setResults (allMovies) {
    const foundByNameMovies = filterMoviesByName(allMovies, inputValue);
    localStorage.setItem('foundMovies', JSON.stringify(foundByNameMovies));
    setFoundByNameMovies(foundByNameMovies);
    setResultFilteredMovies(filterShorts(foundByNameMovies, filterChecked));
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    if (inputValue === '') {
      setErrorMessasge(EMPTY_INPUT_ERR_MESSAGE);
      setIsValid(false);
      setBtnDisabled(true);
      return;
    }
    else {
      setErrorMessasge('');
      setIsValid(true);
      setBtnDisabled(false);

      if (allMoviesFromApi === null || Object.keys(allMoviesFromApi).length === 0){
        setIsLoading(true);
        const allMoviesFromApiResult = await props.getMoviesFromApi();
        setResults(allMoviesFromApiResult)
        setIsLoading(false);
        setAllMoviesFromApi(allMoviesFromApiResult);
      }
      else{
        setResults(allMoviesFromApi)
      }
    localStorage.setItem('inputValue', inputValue);
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
        isValid={isValid}
        disabled={btnDisabled}
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