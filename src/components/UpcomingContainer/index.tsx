import React from "react";
import "./style.scss";
import UpcomingCards from "../UpcomingCards";
import LeftArrow from "../../assest/img/pict/leftarrow.png";
import RightArrow from "../../assest/img/pict/rightarrow.png";
function UpcomingContainer() {
  return (
    <div className="upcoming-container">
      <div className="upcoming-title">
        <div className="title">
          <h3>Upcoming Released</h3>
        </div>
        <div className="upcoming-date">{}</div>
        <div className="upcoming-nav-horizantal">
          <button className="view-all-btn">
            <a className="view-all" href="">
              <h4>View All</h4>
            </a>
          </button>

          <div className="nav-arrows">
            <button className="left-arrow-btn">
              <img className="left-arrow" src={LeftArrow} alt="Left Arrow" />
            </button>
            <button className="right-arrow-btn">
              <img className="right-arrow" src={RightArrow} alt="Right Arrow" />
            </button>
          </div>
        </div>
      </div>

      <UpcomingCards />
    </div>
  );
}
export default UpcomingContainer;
