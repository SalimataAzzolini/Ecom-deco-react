import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./style/header-public.scss";
import Logo from "@/assets/img/logo.png";



const HeaderPublic = () => {

  //Vérification de l'authentification de l'utilisateur
   const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      setIsAuthenticated(true);
    }
  }, []);


  return (
    <div className="header-public">
      <nav className="navbar navbar-expand-lg navbar-light  nav-public">
      <img src={Logo} className="logo-header-public"/>
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
              <Link to="/home" className="nav-link all-nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category" className="nav-link all-nav-link">
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link all-nav-link">
                Concept
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link all-nav-link">
                Contact
              </Link>
            </li>
            <li className="link-login">
              {/* //Si l'utilisateur n'est pas connecté, il sera redirigé vers la page de connexion */}
             
             {
                isAuthenticated ?
                <Link to="/user" className="all-nav-link">Mon compte</Link>
                :
                <Link to="/auth/login" className="all-nav-link">Connexion</Link>

             }
                
            </li>

            <li className="link-basket" >
              <Link to="/basket" className="all-nav-link">&nbsp; Panier 
                <ShoppingBasketIcon className="basket-icon"/> </Link>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderPublic;
