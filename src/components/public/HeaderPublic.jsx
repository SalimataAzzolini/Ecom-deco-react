import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./style/header-public.scss";
import Logo from "@/assets/img/logo.png";

const HeaderPublic = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header-public">
      <nav className="navbar navbar-expand-lg navbar-light  nav-public">
        <Link to="/home" className="">
          <img src={Logo} className="logo-header-public" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler btn-nav-toggle-public"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" id="ul-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link all-nav-link" onClick={closeMenu}>
                Accueil
              </Link>
            </li>
            {/* Transformer ce lien en dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle all-nav-link"
                to="/category"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={closeMenu}
              >
                La Boutique
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/category/salon" className="dropdown-item" onClick={closeMenu}>
                  Salon
                </Link>
                <Link to="/category/bedroom" className="dropdown-item" onClick={closeMenu}>
                  Chambre
                </Link>
                <Link to="/category/bathroom" className="dropdown-item" onClick={closeMenu}>
                  Bain
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/concept" className="nav-link all-nav-link" onClick={closeMenu}>
                Concept
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link all-nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className="link-basket">
              <Link to="/basket" className="all-nav-link" onClick={closeMenu}>
                &nbsp; Panier
                <ShoppingBasketIcon className="basket-icon-public" />
              </Link>
            </li>
            <li className="link-login">
              {isAuthenticated ? (
                <Link to="/user" className="all-nav-link" onClick={closeMenu}>
                  Mon compte
                </Link>
              ) : (
                <Link to="/auth/login" className="all-nav-link" onClick={closeMenu}>
                  Connexion
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderPublic;
