// IMPORTS:
import React from "react";

// COMMON PART FOR ALL POPUPS WITH FORM:
function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <form
        action="#"
        className="popup__container"
        name={`${props.name}-form`}
        noValidate
      >
        <h2 className="popup__container-title">{props.title}</h2>
        {props.children}
        <button type="submit" className="popup__container-submit">
          Сохранить
        </button>
        <button
          type="button"
          className="popup__container-discard"
          id="profile-form-reset-button"
          aria-label="Закрыть окно."
          onClick={props.onClose}
        ></button>
      </form>
    </div>
  );
}

export default PopupWithForm;
