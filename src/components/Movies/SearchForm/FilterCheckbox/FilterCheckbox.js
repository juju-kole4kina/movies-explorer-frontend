import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return(
    <label className="filter-checkbox">
      <input type="checkbox" className="filter-checkbox__input" />
      <span className="filter-checkbox__switch"></span>
    </label>
  );
}

export default FilterCheckbox;