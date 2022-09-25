import React from 'react'
import "./control.css";
const Control = () => {
  return (
    <div className="control__btn-container">
      <button className="control_btn-container__new control-btn">Nauja prekė</button>
      <button className="control_btn-container__send control-btn">Pažymėtus siųsti į PPG</button>
      <hr/>
      <button className="control_btn-container__filter-returned control-btn">Filtruoti grąžintus</button>
      <button className="control_btn-container__filter-sent control-btn">Filtruoti išsiųstus į PPG</button>
      <button className="control_btn-container__filter-delivered control-btn">Filtruoti išvežtus</button>
    </div>
  )
}

export default Control