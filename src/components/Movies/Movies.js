import React from 'react';

import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';

function Movies(props) {
  return(
    <>
      <Header />
      <SearchForm />
      <Footer />
    </>

  );
}

export default Movies;