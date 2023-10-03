import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import './Popup.css';

import stausErrIcon from '../../images/register-status-err.png';
import statusOkIcon from '../../images/resister-srarus-ok.png';

function Popup(props) {
  const location = useLocation();

  useEffect(() => {
    if (!props.isOpen) return;
    function closeByEscape(e) {
      if (e.key === `Escape`) {
        props.onClose();
      }
    }

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [props.isOpen, props.onClose]);

  function handleOverlay(e) {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  return(
    <section
      className={`popup popup_type_verification ${props.isOpen ? "popup_opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className="popup__container">
        <button type="button" className="popup__exit-btn" aria-label="Закрыть модальное окно" onClick={props.onClose}></button>
        <img
          className="popup__status-icon"
          alt={props.status ? "Статус ОК" : "Статус неОК"}
          src={props.status ? statusOkIcon : stausErrIcon}
        />
        <p className="popup__status-text">{props.status ? (location.pathname === '/profile' ? "Данные успешно сохранены!" : "Вы успешно зарегестрировались!") : "Что-то пошло не так! Попробуйте ещё раз"}</p>
      </div>
    </section>
  )
}

export default Popup;