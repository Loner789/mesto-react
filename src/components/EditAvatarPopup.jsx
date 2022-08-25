// IMPORTS:
import React from "react";
import PopupWithForm from "./PopupWithForm";

// EDIT-AVATAR-POPUP COMPONENT:
function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="edit-avatar-popup"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
    >
      <label className="popup__container-field">
        <input
          type="url"
          className="popup__container-input"
          name="avatar"
          id="avatar-link"
          placeholder="Ссылка на картинку профиля"
          required
        />
        <span className="avatar-link-error popup__container-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
