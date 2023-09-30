import '../../index.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../NotFoundPage/NotFoundPage';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { auth } from '../../utils/auth';

import { CurrentUserContext } from '../../context/CurrentUserCotext';

import {
  REGISTER_ERR_MESSAGE,
  UPDATE_ERR_MESSAGE,
  DOUBLE_EMAIL_ERR_MESSAGE,
  WRONG_LOGIN_OR_PASSWORD_ERR_MESSAGE,
  AUTH_UNCORRECT_TOKEN_ERR_MESSAGE,
  SEARCH_ERR_MESSAGE,
  COUNT_MOVIES_1280,
  COUNT_MOVIES_950,
  COUNT_MOVIES_520,
  COUNT_MOVIES_ALSO_1280,
  COUNT_MOVIES_ALSO_950,
  COUNT_MOVIES_ALSO_520
} from '../../utils/constants';


function App() {
const navigate = useNavigate();

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [isLoading, setIsLoading] = useState(false);

const [currentUser, setCurrentUser] = useState({});
const [movies, setMovies] = useState([])
const [savedMovies, setSavedMovies] = useState([]);

const [email, setEmail] = useState('');
const [errMessage, setErrMessage] = useState('');

const [countMovies, setCountMovies] = useState(0);
const [countMoviesAlso, setCountMoviesAlso] = useState(0);

useEffect(() => {
  checkToken();
}, [isLoggedIn]);

useEffect(() => {
  if (isLoggedIn) {
    getSavedMovies();
  }
}, [isLoggedIn])

useEffect(() => {
  onResize();
  window.addEventListener('resize', () => {
    setTimeout(() => onResize(), 500);
  });
  return () => window.removeEventListener('resize', onResize);
}, []);

function getMoviesFromApi() {
  moviesApi
  .getMovies()
  .then((movies) => {
    localStorage.setItem("movies", JSON.stringify(movies));
    setMovies(movies);
  })
  .catch((err) => {
    if (err.status === 500) {
      setErrMessage(SEARCH_ERR_MESSAGE);
    }
    console.log("Error: " + err.status);
  });
}
function getSavedMovies() {
  mainApi
  .getSaveMovies()
  .then((movies) => {
    setSavedMovies(movies);
  })
  .catch((err) => {
    if (err.status === 500) {
      setErrMessage(SEARCH_ERR_MESSAGE);
    }
    console.log("Error: " + err.status);
  });
}

function onResize() {
  const width = window.innerWidth;

  if (width <= 520) {
    setCountMovies(COUNT_MOVIES_520);
    setCountMoviesAlso(COUNT_MOVIES_ALSO_520);
  } else if (width <= 950) {
    setCountMovies(COUNT_MOVIES_950);
    setCountMoviesAlso(COUNT_MOVIES_ALSO_950);
  } else if (width <= 1280) {
    setCountMovies(COUNT_MOVIES_1280);
    setCountMoviesAlso(COUNT_MOVIES_ALSO_1280);
  } else {
    setCountMovies(COUNT_MOVIES_1280);
    setCountMoviesAlso(COUNT_MOVIES_ALSO_1280);
  }
}

function changeFormatTime(duration) {
  const minutes = duration % 60;
  const hour = Math.floor(duration / 60);

  if (hour === 0 && minutes) {
    return `${minutes}м`;
  } else if (minutes === 0 && hour) {
    return `${hour}ч`;
  } else {
    return `${hour}ч ${minutes}м`;
  }
}

function handleSavedMovie(movie) {
  mainApi
    .createSaveMovie(movie)
    .then((newMovie) => {
      setSavedMovies([newMovie, ...savedMovies]);
    })
    .catch((err) => console.log("Error: " + err.status));
}

function handleDeleteSavedMovie(movie) {
  const movieToDeleteId = movie.id ?? movie.movieId;
  const savedMovieId = savedMovies.find(
    (i) => i.movieId === movieToDeleteId
  )._id;

  mainApi
    .deleteSaveMovie(savedMovieId)
    .then(() => {
      const filterSavedMovies = savedMovies.filter(
        (i) => i.movieId !== movieToDeleteId
      )
      setSavedMovies(filterSavedMovies);
    })
    .catch((err) => console.log("Error: " + err.status));
}

function handleRegister({ name, email, password }) {
  setIsLoading(true);
  auth
    .createUser(name, email, password)
    .then(() => {
      navigate('/movies', { repalce: true });
    })
    .catch((err) => {
      if (err.status === 409) {
        setErrMessage(DOUBLE_EMAIL_ERR_MESSAGE);
      }
      if (err.status === 500) {
        setErrMessage(REGISTER_ERR_MESSAGE);
      }
      console.log('Error: ' + err.status);
    })
    .finally(() => setIsLoading(false));
}

function handleLogin({ email, password }) {
  setIsLoading(true);
  auth
    .login(email, password)
    .then(() => {
      setIsLoggedIn(true);
      navigate('/movies', { repalce: true });
    })
    .catch((err) => {
      if (err.status === 401) {
        setErrMessage(WRONG_LOGIN_OR_PASSWORD_ERR_MESSAGE);
      }

      if (err.status === 500) {
        setErrMessage(AUTH_UNCORRECT_TOKEN_ERR_MESSAGE);
      }
      console.log('Error: ' + err.status);
    })
    .finally(() => setIsLoading(false));
}

function checkToken() {
  auth
    .getCurrentUser()
    .then((res) => {
      setIsLoggedIn(true);
      setCurrentUser(res);
      setEmail(res.email);
      navigate('/movies', { replace: true });
    })
    .catch((err) => console.log('Error: ' + err.status));
}

function handleSignout() {
  auth
    .loggout()
    .then(() => {
      setIsLoggedIn(false);
      localStorage.removeItem('foundMovies');
      localStorage.removeItem('inputValue');
      localStorage.removeItem('movies');
      localStorage.removeItem("filterChecked");
      localStorage.removeItem("filtredMovies");
      navigate('/signin', { replace: true });
    })
    .catch((err) => console.log("Error: " + err.status));
}

function handleUpdateUserData({ name, email }) {
  setIsLoading(true);
  mainApi
    .updateUserData(name, email)
    .then((data) => {
      setCurrentUser({
        name: data.name,
        email: data.email
      });
    })
    .catch((err) => {
      if (err === 409) {
        setErrMessage(DOUBLE_EMAIL_ERR_MESSAGE);
      }

      if (err === 500) {
        setErrMessage(UPDATE_ERR_MESSAGE);
      }
      console.log("Error: " + err.status);
    })
    .finally(() => setIsLoading(false))
}

  return(
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
          <Route
            path='/signup'
            element={
              <Register
                isRegister={handleRegister}
                errMessage={errMessage}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='/signin'
            element={
              <Login
                isLogin={handleLogin}
                errMessage={errMessage}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                idLoggedIn={isLoggedIn}
                element={
                  <Movies
                    idLoggedIn={isLoggedIn}
                    duration={changeFormatTime}
                    countMovies={countMovies}
                    countMoviesAlso={countMoviesAlso}
                    getMoviesFromApi={getMoviesFromApi}
                    errMessage={errMessage}
                    onSaved={handleSavedMovie}
                    onDeleted={handleDeleteSavedMovie}
                    savedMovies={savedMovies}
                  />
                }
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                idLoggedIn={isLoggedIn}
                element={
                  <SavedMovies
                    savedMovies={savedMovies}
                    idLoggedIn={isLoggedIn}
                    duration={changeFormatTime}
                    setSavedMovies={setSavedMovies}
                    onDeleted={handleDeleteSavedMovie}
                  />
                }
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                idLoggedIn={isLoggedIn}
                element={
                  <Profile
                    idLoggedIn={isLoggedIn}
                    onUpdateUser={handleUpdateUserData}
                    isSignout={handleSignout}
                    errMessage={errMessage}
                    isLoading={isLoading}
                  />
                }
              />
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
