import { createSlice } from "@reduxjs/toolkit";
import add from "../assets/images/Add-user.png";
import auth_Login from "../assets/images/Auth-Login.png";
import form from "../assets/images/form.png";
import rock_papper from "../assets/images/rock-papper-scisors.png";
import static_website from "../assets/images/static website.png";
import todo from "../assets/images/todo.png";

const initialValue = [
  {
    id: 1,
    image: add,
    title: "Add User Functionality",
    category: "mini-project",
    link: "https://github.com/Shokh977/Add---user---functionality",
    description: "add user with age using hooks and handling props.",
  },
  {
    id: 2,
    image: static_website,
    title: "Static Single Page",
    category: "react-project",
    link: "https://github.com/Shokh977/Single-Page-Website-in-ReactJs",
    description:
      "A single page website that is writted in ReactJs using Tailwind CSS. ",
  },
  {
    id: 3,
    image: auth_Login,
    title: "Login with Authantication",
    category: "mini-project",
    link: "https://github.com/Shokh977/Dummy-Authtication-log-in",
    description:
      "Mini dummy log-in form with authentication log-in and log-out pages. used: - useState hook, - ContextApi and more... ",
  },
  ,
  {
    id: 4,
    image: form,
    title: "React Form with Validation",
    category: "react-project",
    link: "https://github.com/Shokh977/Form-in-react",
    description: "Forms in react with validation ",
  },
  ,
  {
    id: 5,
    image: todo,
    title: "To Do App",
    category: "mini project",
    link: "https://github.com/Shokh977/To-Do-App",
    description: "To-Do list creater app in react ",
  },
  ,
  {
    id: 6,
    image: rock_papper,
    title: "Traditional Rock-Paper-Scissors",
    category: "JS-mini-project",
    link: "https://github.com/Shokh977/Rock-paper-scissors",
    description:
      "a traditional simple game called rock-paper-scissors made by using JavaScript ",
  },
];

const projectSlicer = createSlice({
  name: "project",
  initialState: initialValue,
  reducers: {},
});

export default projectSlicer;
