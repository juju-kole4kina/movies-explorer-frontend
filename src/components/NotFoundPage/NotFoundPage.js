import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.css';

function PageNotFound() {
  return(
    <main className="not-found-page">
      <div className="not-found-page__container">
      <h2 className="not-found-page__title">
        <span className="not-found-page__err-code">404</span>
        <p className="not-found-page__err-message">Страница не найдена</p>
      </h2>
      <Link to="/" className="button button_type_to-main link-hover">Назад</Link>
      </div>
    </main>
  );
}

export default PageNotFound;