import React from "react";
import { Link } from "react-router-dom";
import "./header-public.css";

const Header = () => {
  return (
    <header className="header-public">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" id="ul-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <button className="btn btn-dark">
              {" "}
              <Link to="/admin">&nbsp; Login </Link>
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
