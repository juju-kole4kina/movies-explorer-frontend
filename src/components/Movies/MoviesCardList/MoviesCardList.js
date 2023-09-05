import React from 'react';

import './MoviesCardList.css';
import card1 from '../../../images/card-images/card1.jpg';
import card2 from '../../../images/card-images/card2.jpg';
import card3 from '../../../images/card-images/card3.jpg';
import card4 from '../../../images/card-images/card4.jpg';
import card5 from '../../../images/card-images/card5.jpg';
import card6 from '../../../images/card-images/card6.jpg';
import card7 from '../../../images/card-images/card7.jpg';
import card8 from '../../../images/card-images/card8.jpg';
import card9 from '../../../images/card-images/card9.jpg';
import card10 from '../../../images/card-images/card10.jpg';
import card11 from '../../../images/card-images/card11.jpg';
import card12 from '../../../images/card-images/card12.jpg';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return(
    <section className="movie-list-section">
      <ul className="movie-list">
        <MoviesCard link="/" cardName="33 слова о дизайне" timeline="1ч 47м" alt="33 слова о дизайне" img={card1} />
        <MoviesCard link="/" cardName="33 слова о дизайне" timeline="1ч 47м" alt="33 слова о дизайне" img={card2} />
        <MoviesCard link="/" cardName="33 слова о дизайне" timeline="1ч 47м" alt="33 слова о дизайне" img={card3} />
        <MoviesCard link="/" cardName="33 слова о дизайне" timeline="1ч 47м" alt="33 слова о дизайне" img={card4} />
        <MoviesCard link="/" cardName="33 слова о дизайне" timeline="1ч 47м" alt="33 слова о дизайне" img={card5} />
        <MoviesCard link="/" cardName="33 слова о дизайне" timeline="1ч 47м" alt="33 слова о дизайне" img={card6} />
        <MoviesCard link="/" cardName="33 слова о дизайне" timeline="1ч 47м" alt="33 слова о дизайне" img={card7} />
        <MoviesCard link="/" cardName="33 слова о дизайне" timeline="1ч 47м" alt="33 слова о дизайне" img={card8} />
        <MoviesCard link="/" cardName="33 слова о дизайне" timeline="1ч 47м" alt="33 слова о дизайне" img={card9} />
        <MoviesCard link="/" cardName="33 слова о дизайне" timeline="1ч 47м" alt="33 слова о дизайне" img={card10} />
        <MoviesCard link="/" cardName="33 слова о дизайне" timeline="1ч 47м" alt="33 слова о дизайне" img={card11} />
        <MoviesCard link="/" cardName="33 слова о дизайне" timeline="1ч 47м" alt="33 слова о дизайне" img={card12} />
      </ul>
    </section>
  );
}

export default MoviesCardList;