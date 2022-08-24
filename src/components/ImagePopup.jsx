import React from "react";

function ImagePopup(props) {
  return (
    <div className="popup popup_type_image-popup">
      <div className="popup__figure">
        <img src="#" alt="Фото." className="popup__image" />
        <p className="popup__image-caption"></p>
        <button
          type="button"
          className="popup__container-discard"
          id="image-popup-discard-button"
          aria-label="Закрыть окно."
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
