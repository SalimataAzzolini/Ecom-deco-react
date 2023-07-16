import {useNavigate} from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import "./style/footer-home.scss";

const FooterHome = () => {

	const navigate = useNavigate();
    return (
 <div>

	<footer className="footer">
		<div className="container-footer">
			<div className="row">
				<div className="footer-col">
					<h4>Home Décor</h4>
					<ul>
						<li><span  onClick={() => navigate('/')}>Accueil</span></li>
						<li><span  onClick={() => navigate('/concept')}>Le concept</span></li>
						<li><span >FAQ</span></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>La Boutique</h4>
					<ul>
						<li><span onClick={() => navigate('/category/salon')}>Salon</span></li>
						<li><span onClick={() => navigate('/category/bedroom')}>Chambre</span></li>
						<li><span onClick={() => navigate('/category/bathroom')}>Bain</span></li>
				</ul>
				</div>
				<div className="footer-col">
					<h4>Guide</h4>
					<ul>
						<li><span >Clik and Collect</span></li>
						<li><span  onClick={() => navigate('/mentions-legales')}>Mentions Légales</span></li>
						<li><span  onClick={() => navigate('/politique-de-confidentialite')}>Politiques de Confidentialités</span></li>
					</ul>
				</div>

				<div className="footer-col">
					<h4>Suivez-nous</h4>
					<div className="social-links-footer">
						<span ><FaFacebook/></span>
						<span ><FaInstagram/></span>
						<span ><FaTwitter/></span>
						<span ><FaPinterest/></span>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>
    );
};

export default FooterHome;