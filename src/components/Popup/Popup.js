import { useEffect } from "react";

import stausErrIcon from '../../images/register-status-err.png';
import statusOkIcon from '../../images/resister-srarus-ok.png';

function Popup(props) {
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
      className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className="popup__container">
        <button type="button" className="popup__exit-btn" aria-label="Закрыть модальное окно" onClick={props.onClose}></button>
        <img
          className="popup__status-icon"
          alt={props.status ? "Статус ОК" : "Статус неОК"}
          src={props.status ? statusOkIcon : stausErrIcon}
        />
        <p className="popup__status-text">{props.status ? "Данные успешно сохранены!" : "Что-то пошло не так! Попробуйте ещё раз"}</p>
      </div>
    </section>
  )
}

export default Popup;