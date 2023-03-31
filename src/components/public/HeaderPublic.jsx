import React from "react";
import { Link } from "react-router-dom";
import "./style/header-public.scss";
import Logo from "@/assets/img/logo.png";

const HeaderPublic = () => {
  return (
    <div className="header-public">
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-public">
      <img src={Logo} className="logo"/>
        <button
          className="navbar-toggler btn-nav-toggle-public"
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
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link">
                Concept
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="link-login" >
              <Link to="/auth/login">&nbsp; Mon compte </Link>
            </li>

            <li className="link-basket" >
              <Link to="">&nbsp; Panier </Link>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderPublic;
