import React from 'react';

import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoviesCard from './MoviesCard/MoviesCard';

import card1 from '../../images/card-images/card1.jpg';
import card2 from '../../images/card-images/card2.jpg';
import card3 from '../../images/card-images/card3.jpg';
import card4 from '../../images/card-images/card4.jpg';
import card5 from '../../images/card-images/card5.jpg';
import card6 from '../../images/card-images/card6.jpg';
import card7 from '../../images/card-images/card7.jpg';
import card8 from '../../images/card-images/card8.jpg';
import card9 from '../../images/card-images/card9.jpg';
import card10 from '../../images/card-images/card10.jpg';
import card11 from '../../images/card-images/card11.jpg';
import card12 from '../../images/card-images/card12.jpg';

function Movies(props) {
  return(
    <>
      <Header />
      <SearchForm />
      <MoviesCardList>
      <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card1} />
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card2} />
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card3} />
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card4} />
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card5} />
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card6}/>
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card7} />
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card8} />
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card9} />
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card10} />
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card11} />
        <MoviesCard cardName="33 слова о дизайне" timeline="1ч 47м" link="/" alt="33 слова о дизайне" img={card12} />
      </MoviesCardList>
      <Footer />
    </>

  );
}

export default Movies;