import { createSlice } from "@reduxjs/toolkit";

import add from "../assets/images/Add-user.png";
import auth_Login from "../assets/images/Auth-Login.png";
import form from "../assets/images/form.png";
import rock_papper from "../assets/images/rock-papper-scisors.png";
import static_website from "../assets/images/static website.png";
import todo from "../assets/images/todo.png";

const initialValue =  [
  {
    id: 1,
    image: add,
    title: "Add User Functionality",
    category: "mini-project",
    link: "https://github.com/Shokh977/Add---user---functionality",
  },
  {
    id: 2,
    image: static_website,
    title: "Static Single Page",
    category: "react-project",
    link: "https://github.com/Shokh977/Single-Page-Website-in-ReactJs",
  },
  {
    id: 3,
    image: auth_Login,
    title: "Login with Authantication",
    category: "mini-project",
    link: "https://github.com/Shokh977/Dummy-Authtication-log-in",
  },
  ,
  {
    id: 4,
    image: form,
    title: "React Form with Validation",
    category: "react-project",
    link: "https://github.com/Shokh977/Form-in-react",
  },
  ,
  {
    id: 5,
    image: todo,
    title: "To Do App",
    category: "mini project",
    link: "https://github.com/Shokh977/To-Do-App",
  },
  ,
  {
    id: 6,
    image: rock_papper,
    title: "Traditional Rock-Paper-Scissors",
    category: "JS-mini-project",
    link: "https://github.com/Shokh977/Rock-paper-scissors",
  },
];


const workSlicer = createSlice({
    name: "work",
    initialState: initialValue,
    reducers: {},
  });
  
  export default workSlicer;
  

