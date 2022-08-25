import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image-popup ${
        props.card ? "popup_opened" : ""
      }`}
    >
      <div className="popup__figure">
        <img
          src={props.card ? props.card.link : "#"}
          alt={props.card ? `Фото ${props.card.name}.` : ""}
          className="popup__image"
        />
        <p className="popup__image-caption">
          {props.card ? props.card.name : ""}
        </p>
        <button
          type="button"
          className="popup__container-discard"
          id="image-popup-discard-button"
          aria-label="Закрыть окно."
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
