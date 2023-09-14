import React, { useState } from 'react';

import './FilterCheckbox.css';

function FilterCheckbox(props) {
  const [isFilter, setFilter] = useState(false);

  function handleChangeFilter(e) {
    setFilter(e.target.value);
  }
  return(
    <div className="filter-checkbox">
      <label className="filter-checkbox__container">
        <input type="checkbox" value={isFilter} onChange={handleChangeFilter} className="filter-checkbox__input" />
        <span className="filter-checkbox__switch button-hover"></span>
    </label>
    <p className="filter-checkbox__title">Короткометражки</p>
    </div>

  );
}

export default FilterCheckbox;