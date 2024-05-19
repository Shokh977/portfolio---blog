import React, { useState, useEffect } from "react";
import "./postDetails.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const CardDetails = () => {
  const { id } = useParams(); // Assuming postId is the parameter for card id
  const cards = useSelector((state) => state.post.cardsArray); // Assuming state.cards.cardsArray contains the array of cards
  const card = cards.find((card) => card.id === parseInt(id)); // Finding the card with the given postId
  const [activeSection, setActiveSection] = useState(null);
  console.log(card, 'incard details');

  useEffect(() => {
    if (card) {
      const handleScroll = () => {
        const sectionOffsets = card.sections.map((section) => {
          const el = document.getElementById(section.id);
          return {
            id: section.id,
            offsetTop: el.offsetTop,
            offsetBottom: el.offsetTop + el.offsetHeight,
          };
        });

        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (let i = sectionOffsets.length - 1; i >= 0; i--) {
          if (
            scrollPosition >= sectionOffsets[i].offsetTop &&
            scrollPosition < sectionOffsets[i].offsetBottom
          ) {
            setActiveSection(sectionOffsets[i].id);
            break;
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [card]);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="post-container">
      <main className="content">
        <h1>{card.title}</h1>
        {card && card.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="section"
          >
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </main>
      <aside className="sidebar">
        <ul>
          {card && card.sections.map((section) => (
            <li
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={activeSection === section.id ? "active" : ""}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};