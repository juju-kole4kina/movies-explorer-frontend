import React from 'react';

import './NoResult.css';

function NoResult(props) {
  return(
    <div className="no-result">
      {props.serverErr ? (
        <p className="no-result__message no-result__message_error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : (
        <p className="no-result__message">{props.isSearch ? "Ничего не найдено" : ""}</p>
      )}
    </div>
  );
}

export default NoResult;