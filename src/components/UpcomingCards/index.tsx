import React from "react";
import "./style.scss";
import BookImg from "../../assest/img/pict/bookimg.png";
import BookSet from "../../assest/img/pict/bookset.png";
import BookFav from "../../assest/img/pict/favori.png";
import { BooksModel, upcomingLists } from "../NewsCard/data";
import { DegreeModel, degreeList } from "../NewsCard/data";

function UpcomingCards() {
  return (
    <div className="upcoming-cards-body">
      <div className="card-content">
        {upcomingLists.map((book: BooksModel, index) => {
          return (
            <div key={index} className="card-container">
              <div className="card-image">
                <img src={BookImg} alt="Book Img" />
              </div>
              <button className="book-set">
                <img src={BookSet} alt="Book Set" />
              </button>
              <button className="book-fav">
                <img src={BookFav} alt="Book Fav" />
              </button>
            </div>
          );
        })}
      </div>
      <div className="books-degree">
        {degreeList.map((degree: DegreeModel, index) => {
          return (
            <button key={index} className="btn-books-degree">
              <a className="books-degree-title" href="">
                <h4>{degree?.title ?? "not available"}</h4>
              </a>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default UpcomingCards;
