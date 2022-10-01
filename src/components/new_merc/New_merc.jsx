import React from "react";
import "./new_merc.css";
const NewMerc = () => {
  return (
    <div id="newMerc__container" className="newMerc__container hidden">
      <div className="newMerc__container__header">Pridėti naują prekę</div>
      <div className="newMerc__container__content">
        <form id="newMerc-form" className="newMerc__container__content__form">
          <label className="newMerc__container__content__form__label">
            Prekės kodas
          </label>
          <input
            className="newMerc__container__content__form__input"
            type="text"
          ></input>
          <label className="newMerc__container__content__form__label">
            Prekės pavadinimas
          </label>
          <input
            className="newMerc__container__content__form__input"
            type="text"
          ></input>
          <label className="newMerc__container__content__form__label">
            Kiekis
          </label>
          <input
            className="newMerc__container__content__form__input"
            type="number"
          ></input>
          <label className="newMerc__container__content__form__label">
            Pirkta
          </label>
          <input
            className="newMerc__container__content__form__input"
            type="text"
          ></input>
          <label className="newMerc__container__content__form__label">
            Grąžinimo data
          </label>
          <input
            id="time_input"
            className="newMerc__container__content__form__input"
            type="date"
          ></input>
          <div className="newMerc__container__content__form__button-container">
            <input
              className="newMerc__container__content__form__button"
              type="submit"
              value="Įterpti"
            ></input>
            <input
              className="newMerc__container__content__form__button"
              onClick={closeForm}
              type="button"
              value="Atšaukti"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};
function closeForm() {
  document.getElementById("backdrop").classList.add("hidden");
  document.getElementById("newMerc__container").classList.add("hidden");
  document.getElementById("newMerc-form").reset();
}
export default NewMerc;
