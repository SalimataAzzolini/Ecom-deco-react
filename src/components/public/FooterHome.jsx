import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import "./style/footer-home.scss";

const FooterHome = () => {
    return (
 <div>

<footer className="footer">
  	<div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Home Décor</h4>
  	 			<ul>
  	 				<li><a href="#">A propos</a></li>
  	 				<li><a href="#">Le concept</a></li>
  	 				<li><a href="#">Programme de fidélité</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Clik and Collect</a></li>
  	 				<li><a href="#">Retour / Echange</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>La Boutique</h4>
  	 			<ul>
  	 				<li><a href="#">Salon</a></li>
  	 				<li><a href="#">Chambre</a></li>
  	 				<li><a href="#">Bain</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Suivez-nous</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
    </footer>
</div>
    );
};

export default FooterHome;