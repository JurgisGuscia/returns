import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card" onClick={showInfo}>
      <div className="card__code">Kodas</div>
      <div className="card__name">Pavadinimas</div>
      <div className="card__ammount">Kiekis</div>
      <div className="card__source">Pirkta</div>
      <div className="card__date">2022 02 02</div>
      <div className="card__status">Grazinta</div>
      <input className="card__selection" type="checkbox"></input>
      <button className="card__edit-btn" onClick={showEditForm}>
        E
      </button>
    </div>
  );
};
function showEditForm() {
  alert("edit form shown");
}
function showInfo() {
  document.getElementById("backdrop").classList.remove("hidden");
  document.getElementById("info-card-container").classList.remove("hidden");
}
export default Card;
