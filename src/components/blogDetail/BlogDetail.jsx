import React from "react";
import "./blogDetail.css";
import { Card } from "../../UI/card/card";
import { useSelector } from "react-redux";

export const BlogDetail = () => {
  const cards = useSelector((state) => state.post.cardsArray);
  return (
    <div className="blogDetail">
      <h1>Posts</h1>
      <div className="card-container">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
      </div>
    </div>
  );
};
