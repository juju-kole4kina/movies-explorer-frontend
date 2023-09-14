import React, { useState } from 'react';

import './Searchform.css';
import arrow from '../../../images/icons/icon-arrow-right-min.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import Button from '../../Button/Button';

function SearchForm(props) {
  const [isSearchText, setSearchText] = useState('');

  function handleChangeSearchText(e) {
    setSearchText(e.target.value);
  }
  return(
    <section className="seach-form-section section-container" aria-label="Форма поиска">
      <form className="seach-form-section__form">
        <div className="seach-form-section__input-container">
          <div className="seach-form-section__icon"></div>
          <input type="text" value={isSearchText} onChange={handleChangeSearchText} className="seach-form-section__input" placeholder="Фильм" />
          <Button type="submit" className="button_type_search" buttonText={<img className="button__icon" src={arrow} alt="Кнопка поиска" />} />
        </div>
        <FilterCheckbox />
      </form>

    </section>
  );
}

export default SearchForm;