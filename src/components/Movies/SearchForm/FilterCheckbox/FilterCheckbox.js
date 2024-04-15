import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox(props) {
  const { checked, onChangeFilter } = props;
  return(
    <div className="filter-checkbox">
      <label className="filter-checkbox__container">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChangeFilter}
          className="filter-checkbox__input"
        />
        <span className="filter-checkbox__switch button-hover"></span>
    </label>
    <p className="filter-checkbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;