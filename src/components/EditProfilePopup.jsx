// IMPORTS:
import React from "react";
import PopupWithForm from "./PopupWithForm";

// EDIT-PROFILE-POPUP COMPONENT:
function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="edit-profile-popup"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
    >
      <label className="popup__container-field">
        <input
          type="text"
          className="popup__container-input"
          name="name"
          id="profile-name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="profile-name-error popup__container-input-error"></span>
      </label>
      <label className="popup__container-field">
        <input
          type="text"
          className="popup__container-input"
          name="about"
          id="profile-job"
          placeholder="Профессия"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="profile-job-error popup__container-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
