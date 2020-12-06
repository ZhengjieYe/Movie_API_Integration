import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import "./siteHeader.css";

export const SiteHeader = () => {
  return (
    <nav className="navbar fixed-top" style={{backgroundColor:"rgba(0,0,0,0.3)"}}>
      <nav className="navbar-brand">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>

      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link text-white" to="/movies/upcoming" data-test="site-header-upcoming">
                Upcoming
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites" data-test="site-header-favorites">
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;