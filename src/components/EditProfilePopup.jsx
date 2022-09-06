// IMPORTS:
import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

// EDIT-PROFILE-POPUP COMPONENT:
function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // State-variables
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  // Side-effects
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  // Functions
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile-popup"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          value={name || ""}
          onChange={handleNameChange}
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
          value={description || ""}
          onChange={handleDescriptionChange}
        />
        <span className="profile-job-error popup__container-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
