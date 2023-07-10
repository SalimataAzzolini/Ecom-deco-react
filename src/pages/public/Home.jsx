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
import { Link } from 'react-router-dom';


const Home = () => {

    const flag = useRef(false);
    const [products, setProducts] = useState();

        
    useEffect(() => {

        if(!flag.current){
            productService.getAllProducts()
            .then(res => {
                console.log(res.data);
                setProducts(res.data);

            })
            .catch(err => console.log(err))
        }

        flag.current = true

    }, [])


    return (

       < div className='home-container'>

            <img src={Banner1} className="img-fluid" alt="..."/>
        {/*************  SECTION 1 LE CONCEPT  ***********/}
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
                            <Link to='/concept' className='link-concept-home'> DÉCOUVRIR LE CONCEPT </Link>
                        </div>
                    </div>
                </section>

        {/*************  SECTION 2 L'UNIVERS  ***********/}
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
        {/*************  SECTIONS CATEGORIES ***********/}
                <section className='section-home3'>
                    <h3 className='section-title'> Nos Categories </h3>
                    <div className='third-section section-flex'>
                        <div className="col div-grid-cat">
                            <img src={ImgGridCategorySalon} className="img-grid-category"/>
                            <div className="div-cat-h-a">
                                <h5> Salon </h5>
                                <Link to={'/category/salon'} className='link-category'> Découvrir</Link>
                            </div>
                        </div>

                        <div className="col div-grid-cat ">
                            <img src={ImgGridCategoryBed} className="img-grid-category"/>
                            <div className="div-cat-h-a">
                                <h5> Chambre </h5>
                                <Link to={"/category/bedroom"} className='link-category'> Découvrir</Link>
                            </div>
                        </div>
                        <div className="col div-grid-cat">
                            <img src={ImgGridCategoryBath} className="img-grid-category"/>
                            <div className="div-cat-h-a">
                                <h5> Salle de bain </h5>
                                <Link to={"/category/bathroom"} className='link-category'> Découvrir</Link>
                            </div>
                        </div>
                    </div>
                </section>
        {/*************  SECTIONS PRODUITS TENDANCES ***********/}
                <section className='section-home4'>
                    <h3 className='section-title'> Produits Tendances </h3>

                    <div className='product-card-container'>
                        {products && 
                        products
                        .slice(0, 2)
                        .map((product, index) => (
                            <CardSalonProduct key={index} product={product} />
                        ))}
                    </div>
                </section>
        {/*************  SECTIONS BANNIERE LIFESTYLE ***********/}
                <section className='section-home5'>
                   <div className='div-img-lifestyle'>
                        <span className='rond-concept-1'> </span>
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
                                <h4>Suscrire</h4>
                                <p>Inscrivez-vous à notre newsletter et restez connecté.</p>
                            </div>
                            <div  className="form-input-newsletter">
                                <input type="email" placeholder="Votre mail" className='input-newsletter '/>
                                <button  className="subscribe-btn">Suscrire</button>
                            </div>
                        </form>
                    </div>
                    <div className='contact-newsletter'>
                        <h6> @mooddecolive</h6>
                        <h6> 04 23 45 67 89 </h6>
                        <h6>bonjour@ecomdecomood.fr</h6>
                    </div>
                </section>

    
        </div>
    )

};

export default Home;