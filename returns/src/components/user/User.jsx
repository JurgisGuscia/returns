import React from 'react'
import "./user.css";
const User = () => {
  return (
    <div className="user-container">
      <div className="user-container__icon"></div>
      <div className="user-container__name">Darius Jurgis Guščia</div>
      <div className="user-container__position">Prekių priėmėjas</div>
      <div className="user-container__department">PSKYR-260</div>
      <div className="user-container__logout"><button>ATSIJUNGTI</button></div>
    </div>
  )
}

export default User