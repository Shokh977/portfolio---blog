import React from "react";
import "./home.css";
import { Hero } from "../hero/Hero";
import { About } from "../about/About";
import { Projects } from "../projects/Projects";
import { Work } from "../work/Work";
import { Blog } from "../blog/Blog";

export const Home = () => {
  return (
    <div className="container">
      <Hero />
      <About />
      <Projects />
      <Work/>
      <Blog/>
    </div>
  );
};
