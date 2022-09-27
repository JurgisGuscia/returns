import React from 'react'
import "./control.css";
const Control = () => {
  return (
    <div className="control-container">
      <div className="control-container__function-container">
      <div className="control-container__function-container__header">Funkcijos</div>
        <button onClick={handleclick} className="control__btn-container__new control-btn">Nauja prekė</button>
        <button className="control__btn-container__send control-btn">Pažymėtus siųsti į PPG</button>
      </div>
      <div className="control-container__filter-container">
        <div className="control-container__filter-container__header">Filtravimas</div>
        <button className="control__btn-container__filter-returned control-btn">Filtruoti grąžintus</button>
        <button className="control__btn-container__filter-sent control-btn">Filtruoti išsiųstus į PPG</button>
        <button className="control__btn-container__filter-delivered control-btn">Filtruoti išvežtus</button>
      </div>
    </div>
  )
}
function handleclick(){
  document.getElementById("backdrop").classList.toggle("hidden");
}
export default Control