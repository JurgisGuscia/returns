import React from "react";
import { Body, Control, Header, User, New_merc } from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="user-dashboard">
        <User />
      </div>
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <Body />
        </div>
      </div>
      <div className="control">
        <Control />
      </div>
    </div>
  );
};

export default App;
