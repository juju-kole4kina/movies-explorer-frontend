import React, { useState, useEffect } from 'react';

import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import NoResult from '../Movies/NoResult/NoResult';
import { filterMoviesByName, filterShorts } from '../../utils/filter';

import { EMPTY_INPUT_ERR_MESSAGE } from '../../utils/constants';

function SavedMovies(props) {
  const { savedMovies, onDeleted} = props;

  const [isLoading, setIsLoading] = useState(false);
  const [serverErr, setServerErr] = useState(false);
  const [filterChecked, setFilterChecked] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const [foundMovies, setFoundMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {

    setFilteredMovies(filterShorts(filterMoviesByName(savedMovies, inputValue),filterChecked));
  }, [savedMovies, filterChecked])

  function handleChangeSerch(e) {
    setInputValue(e.target.value);
  }

  function handleChangeFilter(e) {
    setFilterChecked(e.target.checked);
  }

  function handleSearch(e) {
    e.preventDefault();
    const foundMovies = filterMoviesByName(savedMovies, inputValue);
    setFilteredMovies(foundMovies);
    setIsSearch(true);

    if (inputValue === "") {
      setErrorMessage(EMPTY_INPUT_ERR_MESSAGE);
    } else {
      setErrorMessage("");
    }
  }

  return(
    <>
      <Header isLoggedIn={props.isLoggedIn} />
      <main className="save-movies">
        <SearchForm
          onSubmit={handleSearch}
          checked={filterChecked}
          value={inputValue}
          onChange={handleChangeSerch}
          onChangeFilter={handleChangeFilter}
          errorMessage={errorMessage}
        />
        {isLoading === true ? <Preloader /> : null}
        {(filteredMovies === null || Object.keys(filteredMovies).length === 0) &&
        !isLoading ? (<NoResult serverErr={serverErr} isSearch={isSearch} />) : (
          <MoviesCardList movies={foundMovies}>
          {filteredMovies.map((movie) => (
            <li key={movie._id}>
              <MoviesCard
              country={movie.country}
              savedMovieItem={movie}
              cardName={movie.nameRU}
              timeline={props.duration(movie.duration)}
              link={movie.trailerLink}
              alt={movie.nameRU}
              img={movie.image}
              imgMiddle={movie.thumbnail}
              imgSmall={movie.small}
              handleDelete={onDeleted}
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

export default SavedMovies;