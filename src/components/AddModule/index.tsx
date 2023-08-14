import React from "react";
import "./style.scss";
import Addmodule from "../../assest/img/pict/addmodule.png";

function AddModule() {
  return (
    <div className="add-module-container">
      <button className="add-module-btn">
        <img className="add-module" src={Addmodule} alt="Add Module"></img>
        <a className="add-module-title" href="">
          <h4>Add a Module</h4>
        </a>
      </button>
    </div>
  );
}
export default AddModule;
