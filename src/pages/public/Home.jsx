import React, {useState, useEffect, useRef} from 'react';
import { productService } from '@/_services';
import './style/home.css';
import Banner1 from '@/assets/img/banner3.png';
import ImgGrid1 from '@/assets/img/img-grid1-home.png';
import ImgGrid3 from '@/assets/img/img-grid3-home.png';
import PhoneHome from '@/assets/img/phone-home.png';
import ImgGridCategorySalon from '@/assets/img/img-grid-category-salon.png';
import ImgGridCategoryBed from '@/assets/img/img-grid-category-bed.png';
import ImgGridCategoryBath from '@/assets/img/img-grid-category-bath.png';
import ImgHomeLifestyle from '@/assets/img/img-home-lifestyle.png';
import CardSalonProduct from '../../components/public/CardSalonProduct';
import SalonCategory from './SalonCategory';
import CardProduct from '../../components/public/CardProduct';
import ImgCoverNesletter from '@/assets/img/img-cover-newsletter.png';
import FooterHome from '../../components/public/FooterHome';

const Home = () => {

    const [products, setProducts] = useState([]);
    const flag = useRef(false);


    return (

       < div className='home-container'>

            <img src={Banner1} className="img-fluid" alt="..."/>

                {/* <div className="first-section">
                    <div className="grid1-first-section grid-first">
                    <img src={ImgGrid1} className="img-grid1"/>
                    </div>
                    <div className="grid-first">
                        <h3> Amour déco </h3>
                        <p>
                        Mon approche est mobile-first. Mon objectif est de garantir à vos clients une expérience agréable au moment d'explorer votre site.
                        </p>
                        <a href='/test' className='link-grid1'> DÉCOUVRIR LE CONCEPT </a>
                    </div>
                </div> */}
                
                <section className='first-section-home '> 
                    <div className="first-section section-flex">
                        <div className="col grid-left">
                            <img src={ImgGrid1} className="img-grid1"/>
                        </div>
                        <div className="col grid-right">
                            <span className='rond-amour-deco'> </span>
                            <h3 className='title-amour-deco'> Amour déco </h3>
                            <p>
                            Mon approche est mobile-first. Mon objectif est de garantir à vos clients une expérience agréable au moment d'explorer votre site.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nisl. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nisl.
                            </p>
                            <a href='/test' className='link-grid1'> DÉCOUVRIR LE CONCEPT </a>
                        </div>
                    </div>
                </section>

                <section className='section2-home'>
                   <h3 className='section-title'> Une marque d’exception pour une expérience unique</h3>
                    <div className='second-section section-flex'>
                        <div className="col grid-left">
                            <img src={ImgGrid3} className="img-grid1"/>
                        </div>

                        <div className="col grid-right">
                            <h3 style={{marginTop : "50px"}}> Amour déco </h3>
                            <p>
                            Mon approche est mobile-first. Mon objectif est de garantir à vos clients une expérience agréable au moment d'explorer votre site.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nisl. Sed euismo
                            </p>
                            <img src={PhoneHome} className="phone-home"/> 
                        </div>
                    </div>
                </section>

                <section className='section-home3'>
                    <h3 className='section-title'> Nos Categories </h3>
                    <div className='third-section section-flex'>
                        <div className="col div-grid-cat">
                            <img src={ImgGridCategorySalon} className="img-grid-category"/>
                            <h5> Salon </h5>
                            <a href='' className='link-category'> Découvrir</a>
                        </div>

                        <div className="col div-grid-cat ">
                            <img src={ImgGridCategoryBed} className="img-grid-category"/>
                            <h5> Chambre </h5>
                            <a href='' className='link-category'> Découvrir</a>
                        </div>
                        <div className="col div-grid-cat">
                            <img src={ImgGridCategoryBath} className="img-grid-category"/>
                            <h5> Salon </h5>
                            <a href='' className='link-category'> Salle de bain</a>
                        </div>
                    </div>

                </section>

                <section className='section-home4'>
                    <h3 className='section-title'> Produits Tendances </h3>
                    <div className='second-section section-flex'>
                        <div className="col grid-left">
                               <CardProduct/>
                        </div>

                        <div className="col grid-right">
                        <CardProduct/> 
                        </div>
                    </div>
                </section>

                <section className='section-home5'>
                   <div className='div-img-lifestyle'> 
                        <img src={ImgHomeLifestyle} className="img-fluid img-lifestyle" alt="..."/>
                    </div>
                </section>

                <section className='section-home6 sections-home'>
                    <h1> Devenez adepte </h1>
                    <div className="wrapper-newsletter">
                        <form action="#"  className="card-newsletter">
                            <div className="">
                                <div  className="image">
                                   {/* <BsFillEnvelopePaperHeartFill/> */}
                                    {/* <i  className="fas fa-envelope"></i> */}
                                </div>
                                <h4>Subscribe</h4>
                                <p>Inscrivez-vous à notre newsletter et restez connecté.</p>
                            </div>
                            <div  className="form-input-newsletter">
                                <input type="email" placeholder="Your Email" className='input-newsletter '/>
                                <button  className="subscribe-btn">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className='contact-newsletter'>
                        <h6> @mooddecolive</h6>
                        <h6> 04 23 45 67 89 </h6>
                        <h6>bonjour@ecomdecomood.fr</h6>
                    </div>
                </section>

                <FooterHome/>
    
        </div>
    )

};

export default Home;