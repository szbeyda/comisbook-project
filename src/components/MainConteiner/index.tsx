import React from "react";
import Navbar from "../Navbar";
import NavbarTab from "../NavbarTab";
//import SearchBox from "../SearchBox";

const MainContainer: React.FC = () => {
  return (
    <div className="main-container">
      <Navbar />
      <NavbarTab />
    </div>
  );
};

export default MainContainer;
