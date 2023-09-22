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

import { mainApi } from '../../utils/MainApi';
import { auth } from '../../utils/auth';

import { CurrentUserContext } from '../../context/CurrentUserCotext';


function App() {
const navigate = useLocation();

const [currentUser, setCurrenrUser] = useState({});
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [email, setEmail] = useState('');

useEffect(() => {
  checkToken();
}, [isLoggedIn]);

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
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile isSignout={handleSignout} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
