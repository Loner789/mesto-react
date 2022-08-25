// IMPORTS:
import React from "react";
import Card from "./Card";
import api from "../utils/api";

// MAIN COMPONENT:
function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  // State-variables
  const [userData, setUserData] = React.useState({});
  const [cards, setCards] = React.useState([]);

  //Side effects:
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

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile profile_place_mesto">
        <div
          className="profile__img-wrapper"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${userData.avatar})` }}
        ></div>
        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__title">{userData.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="Редактировать профиль."
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userData.description}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Добавить фото."
          onClick={onAddPlace}
        ></button>
      </section>
      <section
        className="places places_place_mesto"
        aria-label="Блок с фото мест."
      >
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
