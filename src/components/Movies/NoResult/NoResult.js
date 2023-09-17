import React from 'react';

import './NoResult.css';

function NoResult() {
  return(
    <div className="no-result">
      <p className="no-result__message">Совпадений по данному запросу не найдено</p>
    </div>
  );
}

export default NoResult;