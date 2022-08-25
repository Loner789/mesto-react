// IMPORTS:
import React from "react";
import PopupWithForm from "./PopupWithForm";

// EDIT-AVATAR-POPUP COMPONENT:
function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="edit-avatar-popup"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
