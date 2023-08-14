import React from "react";
import "./style.scss";
import NewsCard from "../NewsCard";
import NewsSetting from "../../assest/img/pict/NewsSetting.png";
import NewsVectör from "../../assest/img/pict/Newsvector.png";
//import NewsAction from "../NewsAction";
function NewsContainer() {
  return (
    <div className="news-container">
      <div className="news-title">
        <div className="title">
          <h3>News</h3>
        </div>
        <div className="card-icon">
          <div className="news-settings">
            <img
              className="news-settings"
              src={NewsSetting}
              alt="news Settings"
            />
          </div>
          <div className="news-vectör">
            <img className="news-vektör" src={NewsVectör} alt="News Vektör" />
          </div>
        </div>
      </div>
      <NewsCard />
    </div>
  );
}
export default NewsContainer;
