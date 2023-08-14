import React from "react";
import "./style.scss";
import SearchIcon from "../../assest/img/icons/searchicon.png";
import HomeIcon from "../../assest/img/icons/home.png";
import LibraryIcon from "../../assest/img/icons/library.png";
import DashboardIcon from "../../assest/img/icons/dashboard.png";
import WishlistIcon from "../../assest/img/icons/wishlist.png";
import InventoryIcon from "../../assest/img/icons/inventory.png";

function NavbarTab() {
  return (
    <div className="navbar-tab-conteiner">
      <div className="background-bar">
        <div className="content-container">
          <button className="navbar-link1">
            <img className="home-icon" src={HomeIcon} alt="Home Icon" />
            <p>Home</p>
          </button>
          <button className="navbar-link1">
            <img
              className="library-icon"
              src={LibraryIcon}
              alt="Library Icon"
            />
            <p>Library</p>
          </button>
          <button className="navbar-link1">
            <img
              className="dashboard-icon"
              src={DashboardIcon}
              alt="Dashboard Icon"
            />
            <p>Dashboard</p>
          </button>
          <button className="navbar-link1">
            <img
              className="wishlist-icon"
              src={WishlistIcon}
              alt="Wishlist Icon"
            />
            <p>Wishlist</p>
          </button>
          <button className="navbar-link1">
            <img
              className="inventory-icon"
              src={InventoryIcon}
              alt="Inventory Icon"
            />
            <p>Inventory</p>
          </button>
        </div>

        <div className="search-box">
          <img className="search-icon" src={SearchIcon} alt="Search Icon" />
          <input
            className="search-input"
            type="text"
            placeholder="Search for a comic.."
          />
        </div>
      </div>
    </div>
  );
}

export default NavbarTab;
