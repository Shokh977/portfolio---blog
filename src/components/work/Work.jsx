import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./work.css";
import { FaGithub } from "react-icons/fa6";

export const Work = () => {
  const menu = useSelector((state) => state.work);
  const [items, setItems] = useState(menu);
  const [activeFilter, setActiveFilter] = useState(null);

  console.log(items, "item");
  const filterItem = (categoryItem) => {
    const updatedItems = menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
    setActiveFilter(categoryItem);
  };

  let content;
  if (items.length <= 0) {
    content = <p className="work-error">No Projects in this section...</p>;
  } else {
    content = (
      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button" target="_blank">
                <FaGithub className="work--button-icon" size={30}/>
              </a>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="recent-work">
      <div className="header">
        <h1>
          Recent <span>Work</span>
        </h1>
        <p>
         
        </p>
      </div>

      <div className="work" id="portfolio">
        <div className="work__filters">
          <span
            className={`work__item ${activeFilter === null ? "active" : ""}`}
            onClick={() => {
              setItems(menu);
              setActiveFilter(null);
            }}>
            Everything
          </span>
          <span
            className={`work__item ${
              activeFilter === "mini-project" ? "active" : ""
            }`}
            onClick={() => {
              filterItem("mini-project");
            }}>
            Mini Projects
          </span>
          <span
            className={`work__item ${
              activeFilter === "react-project" ? "active" : ""
            }`}
            onClick={() => {
              filterItem("react-project");
            }}>
            ReactJS
          </span>
          <span
            className={`work__item ${
              activeFilter === "JS-project" ? "active" : ""
            }`}
            onClick={() => {
              filterItem("JS-project");
            }}>
            Java Script
          </span>
        </div>
        {content}
      </div>
    </div>
  );
};
