import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [data, setUserData] = React.useState("");

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserData({
          name: data.name,
          description: data.about,
          avatar: data.avatar,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          userName={data.name}
          userDescription={data.description}
          userAvatar={data.avatar}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <PopupWithForm />
        <ImagePopup />
      </div>

      <template id="card-template" className="card-template">
        <article className="place">
          <img src="#" alt="Фото." className="place__image" />
          <div className="place__caption">
            <p className="place__caption-title"></p>
            <div className="place__like-wrapper">
              <button
                type="button"
                className="place__like-button"
                aria-label="Поставить лайк."
              ></button>
              <p className="place__likes-counter">0</p>
            </div>
          </div>
          <button
            type="button"
            className="place__delete-button"
            aria-label="Удалить карточку."
          ></button>
        </article>
      </template>
    </div>
  );
}

export default App;
