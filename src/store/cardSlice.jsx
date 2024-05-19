import { createSlice } from "@reduxjs/toolkit";
import react from '../assets/react.jpg'

const initialState = {
  cardsArray: [
    // card
    {
      id: 1,
      title: "What is React?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ipsum!",
      img: react,
      sections: [
        {
          id: 1,
          title: "1-mavzu",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam iure aperiam hic quibusdam asperiores. Beatae, doloremque asperiores modi deserunt officia accusamus vero libero magni culpa necessitatibus facere similique quis adipisci autem totam nihil dolorum harum neque tenetur dolor. Ab facere reiciendis facilis tempora nobis natus aliquid iste architecto iusto, alias a eveniet libero itaque ex quos vel aliquam corrupti praesentium quibusdam explicabo, numquam doloremque? Unde, amet ipsum modi, harum eligendi dicta sit quae quidem optio impedit rerum libero expedita perspiciatis hic minus sint ut ex blanditiis? Doloribus nisi distinctio, inventore quis ad voluptates odio placeat earum sapiente, quo impedit delectus.",
        },
        {
          id: 2,
          title: "mavzu 2",
          content:
            "Content section 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam iure aperiam hic quibusdam asperiores. Beatae, doloremque asperiores modi deserunt officia accusamus vero libero magni culpa necessitatibus facere similique quis adipisci autem totam nihil dolorum harum neque tenetur dolor. Ab facere reiciendis facilis tempora nobis natus aliquid iste architecto iusto, alias a eveniet libero itaque ex quos vel aliquam corrupti praesentium quibusdam explicabo, numquam doloremque? Unde, amet ipsum modi, harum eligendi dicta sit quae quidem optio impedit rerum libero expedita perspiciatis hic minus sint ut ex blanditiis? Doloribus nisi distinctio, inventore quis ad voluptates odio placeat earum sapiente, quo impedit delectus.",
        },
        // Add more sections as needed
      ],
    },
    //card
    {
      id: 2,
      title: "React Redux",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ipsum!",
      img: "card1.jpg",
      sections: [
        { id: 1, title: "Section 1", content: "Content of section 1" },
        { id: 2, title: "Section 2", content: "Content of section 2" },
        // Add more sections as needed
      ],
    },
    {
      id: 3,
      title: "What is React?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ipsum!",
      img: react,
      sections: [
        {
          id: 1,
          title: "1-mavzu",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam iure aperiam hic quibusdam asperiores. Beatae, doloremque asperiores modi deserunt officia accusamus vero libero magni culpa necessitatibus facere similique quis adipisci autem totam nihil dolorum harum neque tenetur dolor. Ab facere reiciendis facilis tempora nobis natus aliquid iste architecto iusto, alias a eveniet libero itaque ex quos vel aliquam corrupti praesentium quibusdam explicabo, numquam doloremque? Unde, amet ipsum modi, harum eligendi dicta sit quae quidem optio impedit rerum libero expedita perspiciatis hic minus sint ut ex blanditiis? Doloribus nisi distinctio, inventore quis ad voluptates odio placeat earum sapiente, quo impedit delectus.",
        },
        {
          id: 2,
          title: "mavzu 2",
          content:
            "Content section 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam iure aperiam hic quibusdam asperiores. Beatae, doloremque asperiores modi deserunt officia accusamus vero libero magni culpa necessitatibus facere similique quis adipisci autem totam nihil dolorum harum neque tenetur dolor. Ab facere reiciendis facilis tempora nobis natus aliquid iste architecto iusto, alias a eveniet libero itaque ex quos vel aliquam corrupti praesentium quibusdam explicabo, numquam doloremque? Unde, amet ipsum modi, harum eligendi dicta sit quae quidem optio impedit rerum libero expedita perspiciatis hic minus sint ut ex blanditiis? Doloribus nisi distinctio, inventore quis ad voluptates odio placeat earum sapiente, quo impedit delectus.",
        },
        // Add more sections as needed
      ],
    },
  ],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
