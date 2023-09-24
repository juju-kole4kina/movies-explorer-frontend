import '../../index.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

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


function App() {
const navigate = useLocation();

const [currentUser, setCurrenrUser] = useState({});
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [email, setEmail] = useState('');
const [movies, setMovies] = useState([]);

const [countMovies, setCountMovies] = useState(0);
const [countMoviesAlso, setCountMoviesAlso] = useState(0);

useEffect(() => {
  checkToken();
}, [isLoggedIn]);

useEffect(() => {
  moviesApi.getMovies()
  .then((movies) => {
    localStorage.setItem('movies', JSON.stringify(movies));
    setMovies(movies);
  })
  .catch((err) => console.log(err));
}, []);

useEffect(() => {
  onResize();
  window.addEventListener('resize', () => {
    setTimeout(() => onResize(), 500);
  });
  return () => window.removeEventListener('resize', onResize);
}, []);

function onResize() {
  const width = window.innerWidth;

  if (width <= 520) {
    setCountMovies(5);
    setCountMoviesAlso(2);
  } else if (width <= 950) {
    setCountMovies(8);
    setCountMoviesAlso(2);
  } else if (width <= 1280) {
    setCountMovies(12);
    setCountMoviesAlso(3);
  } else {
    setCountMovies(12);
    setCountMoviesAlso(3);
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

function handleRegister({ name, email, password }) {
  auth.createUser(name, email, password)
  .then(() => {
    navigate('/signin', { repalce: true });
  })
  .catch((err) => console.log(err));
}

function handleLogin({ email, password }) {
  auth.login(email, password)
  .then(() => {
    setIsLoggedIn(true);
    navigate('/', { repalce: true });
  })
  .catch((err) => console.log(err));
}

function checkToken() {
  auth.getCurrentUser()
  .then((res) => {
    setIsLoggedIn(true);
    setCurrenrUser(res);
    setEmail(res.email);
    navigate('/', { replace: true });
  })
}

function handleSignout() {
  auth.loggout()
  .then(() => {
    setIsLoggedIn(false);
    localStorage.removeItem('searchMovies');
    localStorage.removeItem('serachInputValue');
    localStorage.removeItem('movies');
    navigate('/signin', { replace: true });
  })
  .catch((err) => console.lof(err));
}

  return(
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Register isRegister={handleRegister} />} />
          <Route path='/signin' element={<Login />} isLogin={handleLogin} />
          <Route path='/movies' element={
            <ProtectedRoute
              idLoggedIn={isLoggedIn}
              element={<Movies
              idLoggedIn={isLoggedIn}
              duration={changeFormatTime}
              countMovies={countMovies}
              countMoviesAlso={countMoviesAlso} />
            } />
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute
              idLoggedIn={isLoggedIn}
              element={<SavedMovies
              movies={movies}
              idLoggedIn={isLoggedIn}
              duration={changeFormatTime} />
            } />
          } />
          <Route path='/profile' element={
            <ProtectedRoute
            idLoggedIn={isLoggedIn}
            element={<Profile
              idLoggedIn={isLoggedIn}
              isSignout={handleSignout} />
            } />
          } />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
