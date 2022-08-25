import React from "react";
import Card from "./Card";

function Main(props) {
  return (
    <main className="content">
      <section className="profile profile_place_mesto">
        <div
          className="profile__img-wrapper"
          onClick={props.onEditAvatar}
          style={{ backgroundImage: `url(${props.userAvatar})` }}
        ></div>
        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__title">{props.userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="Редактировать профиль."
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{props.userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Добавить фото."
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section
        className="places places_place_mesto"
        aria-label="Блок с фото мест."
      >
        {props.cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
