import React from "react";
import "./info_card.css";
const Info_card = () => {
  return (
    <div className="info-card-container">
      <div className="info-card-container__header">Įrašo informacija</div>
      <div className="info-card-container__content">
        <div className="info-card-container__content__line">
          <label className="info-card-container__content__line__label">
            Prekės kodas:
          </label>
          <p className="info-card-container__content__line__paragraph">
            Čia prekes kodas
          </p>
        </div>
        <div className="info-card-container__content__line">
          <label className="info-card-container__content__line__label">
            Prekės pavadinimas:
          </label>
          <p className="info-card-container__content__line__paragraph">
            Čia prekės pavadinimas
          </p>
        </div>
        <div className="info-card-container__content__line">
          <label className="info-card-container__content__line__label">
            Prekės kiekis:
          </label>
          <p className="info-card-container__content__line__paragraph">
            Čia prekės kiekis
          </p>
        </div>
        <div className="info-card-container__content__line">
          <label className="info-card-container__content__line__label">
            Grąžinimo data:
          </label>
          <p className="info-card-container__content__line__paragraph">
            Čia grąžinimo data
          </p>
        </div>
        <div className="info-card-container__content__line">
          <label className="info-card-container__content__line__label">
            Grąžinta padalinyje:
          </label>
          <p className="info-card-container__content__line__paragraph">
            Čia grąžinimo padalinys
          </p>
        </div>
        <div className="info-card-container__content__line">
          <label className="info-card-container__content__line__label">
            Statusas:
          </label>
          <p className="info-card-container__content__line__paragraph">
            Čia statusas
          </p>
        </div>
        <div type="button" className="info-card-container__content__button">
          Uždaryti
        </div>
      </div>
    </div>
  );
};

export default Info_card;
