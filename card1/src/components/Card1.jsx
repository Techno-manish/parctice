import React from "react";
import "./Card1.css";
const Card1 = ({ imgSrc, imgAlt, title, cardDescription, button }) => {
  return (
    <div className="cardContainer">
      <img src={imgSrc} alt={imgAlt} className="card-img" />
      <h1 className="heading">{title}</h1>
      <p className="cardDescription">{cardDescription}</p>
      <a className="card-btn" href="cardPage">
        {button}
      </a>
    </div>
  );
};

export default Card1;
