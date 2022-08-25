// IMPORTS:
import React from "react";

// CARD COMPONENT:
function Card({ card, onCardClick }) {
  // Function for handle of click by card image
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="place">
      <div
        style={{ backgroundImage: `url(${card.link})` }}
        className="place__image"
        onClick={handleClick}
      ></div>
      <div className="place__caption">
        <p className="place__caption-title">{card.name}</p>
        <div className="place__like-wrapper">
          <button
            type="button"
            className="place__like-button"
            aria-label="Поставить лайк."
          ></button>
          <p className="place__likes-counter">{card.likes.length}</p>
        </div>
      </div>
      <button
        type="button"
        className="place__delete-button"
        aria-label="Удалить карточку."
      ></button>
    </article>
  );
}

export default Card;
