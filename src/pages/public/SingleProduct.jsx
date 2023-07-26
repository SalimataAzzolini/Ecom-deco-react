import React, { useEffect, useState, useRef } from 'react';
import { useDispatch} from 'react-redux';
import Slider from "react-slick";
import { FaFacebook,FaInstagram, FaPinterest } from 'react-icons/fa';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/joy/Button';
import './style/single-product.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { productService } from '@/_services';
import { addToCart } from '@/_features/cartSlice';


const SingleProduct = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickArrow: false,

};
  
    const flag = useRef(false);

    let {cid} = useParams();

    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    const [isProductFavorite, setIsProductFavorite] = useState(false)
    
    useEffect(() => {
        productService.getProduct(cid)
        .then(res => {
            setProduct(res.data);
        })
        .catch(err => console.log(err))
        flag.current = true
    }, [cid]);


    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    }

    //Fonction pour ajouter ou supprimer un produit des favoris
    const handleAddOrRemoveFavorite = (product) => {
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      let exist = favorites.find(favorite => favorite.id === product.id);
      if(exist){
        favorites = favorites.filter(favorite => favorite.id !== product.id);
      }else{
        favorites.push(product);
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsProductFavorite(!isProductFavorite);
    }

    //Fonction pour regarder si le produit est en favoris ou pas pour mettre le bon icon
    const isFavorite = (product) => {
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      let exist = favorites.find(favorite => favorite.id === product.id);
      if(exist){
        return true;
      }else{
        return false;
      }
    }

    useEffect(() => {
      setIsProductFavorite(isFavorite(product)); 
    }, [product]);
  

    return (
        <div 
        className="container-single-product">
        <div className="slider-single-product">
        <Slider {...settings}>
          { product.images && product.images.map((image, index) => (
            <div key={index}>
              <img src={image.link} alt='img'/>
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
                    marginTop: "2rem"}}
                
                onClick={() => handleAddToCart(product)}
            >
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
              }}
              onClick={() => handleAddOrRemoveFavorite(product)}
              >
              {isProductFavorite ? <FavoriteIcon /> : <FavoriteBorder />}
            </IconButton>

            <div className="social-links-single-product">
  	 				<a href="https"><FaFacebook/></a>
  	 				<a href="https"><FaInstagram/></a>
  	 				<a href="https"><FaPinterest/></a>
  	 			 </div>

        </div>

        </div>
    );
};

export default SingleProduct;