import React from 'react';

import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import SearchForm from '../Movies/SearchForm/SearchForm';

import card1 from '../../images/card-images/card1.jpg';
import card2 from '../../images/card-images/card2.jpg';
import card3 from '../../images/card-images/card3.jpg';

function SavedMovies(props) {
  return(
    <>
      <Header />
      <main className="save-movies">
      <SearchForm />
      <MoviesCardList>
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card1} />
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card2} />
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card3} />
      </MoviesCardList>
      </main>
      <Footer />
    </>

  );
}

export default SavedMovies;