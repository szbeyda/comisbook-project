import React, { useEffect } from "react";
import "./style.scss";
import CardImg from "../../assest/img/pict/cardimg.png";
import CardBut from "../../assest/img/pict/cardbut.png";
import { NewsModel, newsLists } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewslists } from "../../store/news/actions";
function NewsCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewslists());
  }, []);

  const newsList: any = useSelector(fetchNewslists); //buradada useselector ile veriyi variable atandı.

  const yeni = newsList.payload.newsLists.newsLists; // veri tek sıra
  console.log("***********************");

  console.log(yeni);

  return (
    <div className="news-content-body">
      {yeni?.map((news: NewsModel, index: number) => {
        return (
          <div key={index} className="news-card-conteiner">
            <div className="card-title">
              <div className="card-categori">
                <h5>{news?.category ?? "not available"}</h5>
              </div>
              <button className="card-button">
                <img className="card-but" src={CardBut} alt="Card but" />
              </button>
            </div>

            <div className="news-card-image">
              <img className="card-image" src={CardImg} alt="Card Image"></img>
            </div>

            <div className="card-info-conteiner">
              <div className="news-card-title">
                <h4>{news?.title ?? "title not available"}</h4>
              </div>
              <div className="news-card-comment">
                <h5>{news?.description ?? "description not available"}</h5>
              </div>
              <div className="news-card-date">{news?.date.toISOString()}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default NewsCard;
