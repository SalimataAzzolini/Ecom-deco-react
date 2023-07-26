import React from "react";
import { Link } from "react-router-dom";
import './style/product-card.scss'

const CardSalonProduct = ({ product }) => {


  return (
    <div id="card-container">
      {/* <!-- 	product Image--> */}
      <div className="product-image">
        {product.images.length !== 0 &&
          product.images
            .slice(0, 1)
            .map((image, index) => (
              <img src={image.link} alt="product" key={index} />
            ))}
        {/* <img src={product.images.link} alt="" /> */}
      </div>
      {/* <!-- 	product Information--> */}
      <div className="info">
        <h2> Description</h2>
        <p> {product.description}</p>
      </div>

      <div className="product-details">
        {/* 	<!-- 	Product Name --> */}
        <h1>{product.name}</h1>

        <p className="information">Just for you</p>

        <div className="control">
          <Link to={`/product/${product.id}`}>
            <button
              className="btn-product-card"
              style={{ width: "150px", height: "45px" }}
            >
              <span className="price"> {product.price} €</span>
              <span className="buy">Voir</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSalonProduct;
