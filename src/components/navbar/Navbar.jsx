import React from "react";
import "./navbar.css";
import { NavLink, Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-content">
        <Link to="/">
          <h1>
            Uphill<span>.</span>
          </h1>
        </Link>
        <ul>
          <li>
            <NavLink to="blogs">blogs</NavLink>
          </li>
          <li className="yet">
            <button>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
