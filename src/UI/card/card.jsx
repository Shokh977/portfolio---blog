import React from "react";
import "./card.css";
import react from "../../assets/react.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Card = ({ card }) => {
  console.log(card, "inseide");
  return (
    <Link to={`/blogs/${card.id}`} className="card-link">
      <div className="card">
        <img src={react} alt="" />
        <div className="card-content">
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
      </div>
    </Link>
  );
};
