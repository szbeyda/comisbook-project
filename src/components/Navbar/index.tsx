import React from "react";
import "./style.scss";
import CategIcon from "../../assest/img/icons/categ.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="navbar-link">
          <img className="categ-icon" src={CategIcon} alt="Categ Icon" />
        </button>
        <button className="navbar-link">{}</button>
        <button className="navbar-link">{}</button>
      </div>
      <h1 className="navbar-title">{}</h1>
      <div className="navbar-right">
        <button className="navbar-link">{}</button>
        <button className="navbar-link">{}</button>
        <button className="navbar-link">{}</button>
      </div>
    </div>
  );
}

export default Navbar;
