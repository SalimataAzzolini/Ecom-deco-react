import React, { useEffect, useState, useRef } from 'react';
import Slider from "react-slick";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/joy/Button';
import { productService } from '@/_services';
import './style/single-product.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SingleProduct = () => {

    const flag = useRef(false);

    let {cid} = useParams();

    const [product, setProduct] = useState({});

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        slickArrow: false,

    };
      
    
    useEffect(() => {
        productService.getProduct(cid)
        .then(res => {
            console.log(res.data);
            setProduct(res.data)
        })
        .catch(err => console.log(err))

        flag.current = true
    }, []);



    return (
        <div 
        className="container-single-product">
        <div className="slider-single-product">
        <Slider {...settings}>
          { product.images && product.images.map((image, index) => (
            <div key={index}>
              <img src={image.link} />
            </div>
          ))}

        </Slider>
      </div>
        <div className="container-text-single-product">

            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p className='price'>{product.price} €</p>
            <span> </span>

            <Button className='btn-add-to-cart' 
                style={{
                    width: "10rem", 
                    backgroundColor: "#A26A48",
                    bordeRadius: "none",
                    marginTop: "2rem"}}>
               <ShoppingCartIcon className='icon-btn-add-to-cart'  />
               Ajouter
            </Button>
            
            <IconButton variant="outlined"
              style={{
              width: "5rem",
              marginLeft: "1rem",
              borderColor: "#EBCEB5",
              backgroundColor: "white",
              marginTop: "2rem",
              color: "#A26A48",
              }}>
              <FavoriteBorder />
            </IconButton>

            <div className="social-links-single-product">
  	 				<a href="#"><FaFacebook/></a>
  	 				<a href="#"><FaInstagram/></a>
  	 				<a href="#"><FaPinterest/></a>
  	 			 </div>

        </div>

        </div>
    );
};

export default SingleProduct;