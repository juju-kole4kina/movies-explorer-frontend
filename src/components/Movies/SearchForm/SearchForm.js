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
    <section className="seach-form section-container" aria-label="Форма поиска">
      <form className="seach-form__input-container">
        <div className="seach-form__icon"></div>
        <input type="text" value={isSearchText} onChange={handleChangeSearchText} className="seach-form__input" placeholder="Фильм" />
        <Button type="submit" className="button_type_search" buttonText={<img className="button__icon" src={arrow} alt="Кнопка поиска" />} />
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;