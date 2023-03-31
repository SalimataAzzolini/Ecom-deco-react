import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import "./style/footer-home.scss";

const FooterHome = () => {
    return (
 <div>

<footer className="footer">
  	<div className="container-footer">
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
  	 			<h4>La Boutique</h4>
  	 			<ul>
  	 				<li><a href="#">Salon</a></li>
  	 				<li><a href="#">Chambre</a></li>
  	 				<li><a href="#">Bain</a></li>
  	 		</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Guide</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Clik and Collect</a></li>
  	 				<li><a href="#">Retour / Echange</a></li>
  	 			</ul>
  	 		</div>

  	 		<div className="footer-col">
  	 			<h4>Suivez-nous</h4>
  	 			<div className="social-links-footer">
  	 				<a href="#"><FaFacebook/></a>
  	 				<a href="#"><FaInstagram/></a>
  	 				<a href="#"><FaTwitter/></a>
  	 				<a href="#"><FaPinterest/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
    </footer>
</div>
    );
};

export default FooterHome;