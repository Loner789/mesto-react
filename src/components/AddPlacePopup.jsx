import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name="add-card-popup"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label className="popup__container-field">
        <input
          type="text"
          className="popup__container-input"
          name="name"
          id="card-name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="card-name-error popup__container-input-error"></span>
      </label>
      <label className="popup__container-field">
        <input
          type="url"
          className="popup__container-input"
          name="link"
          id="card-link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="card-link-error popup__container-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
