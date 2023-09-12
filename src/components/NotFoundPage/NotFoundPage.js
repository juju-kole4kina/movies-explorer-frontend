import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

import './NotFoundPage.css';

function PageNotFound() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return(
    <main className="not-found-page">
      <h2 className="not-found-page__title">
        <span className="not-found-page__err-code">404</span>
        <p className="not-found-page__err-message">Страница не найдена</p>
      </h2>
      <Button onClick={handleGoBack} className="button_type_go-back" buttonText="Назад" />
    </main>
  );
}

export default PageNotFound;