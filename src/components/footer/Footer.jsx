import React from "react";
import "./footer.css";
import {
  FaGithubSquare,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import plane from "../../assets/plane.png";
import bg from "../../assets/img.jpg";

export const Footer = () => {
  return (
    <div className="footer container">
      <div className="banner">
        <div className="plane">
          <img src={plane} alt="" />
          <div>
            <h1>Have any question?</h1>
            <p>
              Feel free to reach out by clicking the button or connecting with
              me on social media. Let's talk about anything and everything!
            </p>
          </div>
        </div>
        <button>
          <a href="mailto:uphill7165@gmail.com">Contact Now</a>
        </button>
      </div>
      <div className="footer-contact">
        <div className="footer-con">
          <div className="social-media">
            <a href="https://www.linkedin.com/in/abdulazizov-shokhrukh-b7a6b2225">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.youtube.com/@shokh_tv">
              <FaYoutube size={20} />
            </a>
            <a href="https://instagram.com/shokhtv07?igshid=MzNlNGNkZWQ4Mg==">
              <FaInstagram size={20} />
            </a>
            <a
              href="https://github.com/Shokh977"
              className="home__social-link"
              target="_blank">
              {" "}
              <FaGithubSquare size={20} />{" "}
            </a>
          </div>
          <div className="contact">
            <p>
              <IoCallOutline size={20} />
              010-5726-1777
            </p>
            <p>
              <CgMail size={20} />
              uphill7165@gmail.com
            </p>
            <p>
              <CiLocationOn size={20} />
              South Korea
            </p>
          </div>
        </div>
        <div className="copy">
          <p>Copyright 2024 | All rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
