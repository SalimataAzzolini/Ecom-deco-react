import React from 'react';
import { Link } from 'react-router-dom';
import ImgMiroirBain from '@/assets/img/miroir-bain.webp';

const CardProduct = () => {
    return (
        <div className="my-card">
          <div id="card-container">
            {/* <!-- Start	Product details --> */}
    
            <div className="product-image">
              <img src={ImgMiroirBain} alt="" />
               
    
              {/* <!-- 	product Information--> */}
              <div className="info">
                <h2> Description</h2>
                <ul>
                  <li>
                    <strong>Sun Needs: </strong>Full Sun
                  </li>
                  <li>
                    <strong>Soil Needs: </strong>Damp
                  </li>
                  <li>
                    <strong>Zones: </strong>9 - 11
                  </li>
                  <li>
                    <strong>Height: </strong>2 - 3 feet
                  </li>
                  <li>
                    <strong>Blooms in: </strong>MidSummer - MidFall
                  </li>
                  <li>
                    <strong>Features: </strong>Tolerates heat
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details">
              {/* 	<!-- 	Product Name --> */}
              <h1>Miroir Tyssaya</h1>
          
             
              {/* <!-- 		the Product rating --> */}
              <span className="hint-star star">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </span>
    
              <p className="information">
                Spécial pour les chambres à coucher, les salons et les salles de bain
            
              </p>
    
              <div className="control">
                
              <Link to={''}> 
                <button className="btn">
                  <span className="price"> 16$</span>
  
                  <span className="buy">Voir plus</span>
                </button>
                </Link>
              </div>
            </div>
    
          </div>
    
        </div>
     
      );
};

export default CardProduct;