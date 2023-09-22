import React, { useState } from 'react';

import './Searchform.css';
import arrow from '../../../images/icons/icon-arrow-right-min.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import Button from '../../Button/Button';

function SearchForm(props) {
  return(
    <section className="seach-form-section section-container" aria-label="Форма поиска">
      <form className="seach-form-section__form">
        <div className="seach-form-section__input-container">
          <div className="seach-form-section__icon"></div>
          <input type="text" value={props.value} onChange={props.onChange} className="seach-form-section__input" placeholder="Фильм" required />
          <Button type="submit" className="button_type_search" buttonText={<img className="button__icon" src={arrow} alt="Кнопка поиска" />} />
        </div>
        <span className="seach-form-section__error-message">{props.errorMessage}</span>
        <FilterCheckbox />
      </form>

    </section>
  );
}

export default SearchForm;