import React, { useState } from "react";
import "./accordion.css";
import images from "../ProjectImages";
import { IoLogoGithub } from "react-icons/io5";
import { useSelector } from "react-redux";

export const Accordion = ({}) => {
  const projects = useSelector((state) => state.projects);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className="image-accordion">
        {projects.map((item, index) => {
          const isActive = activeIndex === index ? "active" : "";
          return (
            <div key={index}>
              <div
                className={`image-accordion-item ${isActive}`}
                onClick={() => handleToggle(index)}>
                <img src={item.image} alt={item.title} />
                <div className="content">
                  <span className="material-symbols-outlined">
                   <a href={item.link}> <IoLogoGithub /></a>
                  </span>
                  <div>
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>{" "}
      {activeIndex !== null && <Description item={projects[activeIndex]} />}
    </div>
  );
};

const Description = ({ item }) => {
  return (
    <div className="desc">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
};
