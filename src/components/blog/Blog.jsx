import React from "react";
import "./blog.css";
import react from "../../assets/react.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Blog = () => {
  const cards = useSelector((state) => state.post.cardsArray);

  const lastThreeCards = cards.slice(-3);

  return (
    <div className="blog">
      <div className="header">
        <h1>
          Last<span> Posts</span>
        </h1>
        <p>
          Explore the latest posts and blogs about coding and much more here.
        </p>
      </div>
      <div className="posts">
        {lastThreeCards.map((card) => (
          <ul key={card.id}>
            <Link to={`/blogs/${card.id}`}>
              <li>
                <img src={card.img} alt="" className="post" />
              </li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

// // import React from "react";
// import { useSelector } from "react-redux";

// const MyComponent = () => {
//   // Assuming you have a selector to get the cards array from Redux state
//   const cardsArray = useSelector((state) => state.cards.cardsArray);

//   // Slice the array to get the last three cards
//   const lastThreeCards = cardsArray.slice(-3);

//   return (
//     <div>
//       <h2>Last Three Cards</h2>
//       <ul>
//         {lastThreeCards.map((card) => (
//           <li key={card.id}>{/* Render your card component here */}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyComponent;
