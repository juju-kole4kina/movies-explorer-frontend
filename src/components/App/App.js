import '../../index.css';
import './App.css';
import React, { useState } from 'react';
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

function handleRegister({ name, email, password }) {
  auth.createUser(name, email, password)
  .then(() => {
    navigate('/signin', { repalce: true });
  })
  .catch((err) => console.log(err));
}

  return(
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Register isRegister={handleRegister} />} />
          <Route path='/signin' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
