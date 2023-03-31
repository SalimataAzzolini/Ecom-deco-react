import React from "react";
/* import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './style/product-card.scss'

const CardSalonProduct = ({product}) => {

    return (
        <div className="my-card">
          <div id="card-container">
            {/* <!-- Start	Product details --> */}
    
            <div className="product-image">

              {product.images && product.images
              .slice(0, 1)
              .map((image, index) => (
                <img src={image.link} alt="product" key={index}/>
              ))
                
              }
              <img src={product.images.link} alt="" />
      


              {/* <!-- 	product Information--> */}
              <div className="info">
                <h2>The Description</h2>
                <p> {product.description}</p>
              </div>
            </div>
            <div className="product-details">
              {/* 	<!-- 	Product Name --> */}
              <h1>{product.name}</h1>
        
    
              <p className="information">
                Juste for you
              </p>
    
              <div className="control">
                
              <Link to={`/product/${product.id}`}> 
                <button className="btn" style={{width : "150px", height : "45px"}}>
                  <span className="price"> {product.price}</span>
                  <span className="buy">Voir</span>
                </button>
                </Link>
              </div>
            </div>
    
            
          </div>
    
          {/*       <Card
            variant="outlined"
            sx={{
              display: "flex",
              p: 3,
              flexDirection: {
                xs: "column", // mobile
                sm: "row", // tablet and up
              },
            }}
          >
            <CardMedia
              component="img"
              width="100"
              height="100"
              alt="123 Main St, Phoenix, AZ cover"
              src={product.image}
              sx={{
                borderRadius: 0.5,
                width: { xs: "100%", sm: 100 },
                mr: { sm: 1.5 },
                mb: { xs: 1.5, sm: 0 },
              }}
            />
            <Box sx={{ alignSelf: "center", ml: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {product.title}
              </Typography>
              <Typography component="div" fontWeight="bold">
                {product.price}
              </Typography>
              <Box
                sx={{
                  ml: -1,
                  mt: 0.75,
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  display: "flex",
                  typography: "caption",
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "primary.900" : "primary.50",
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "#fff" : "primary.700",
                }}
              >
                Confidence score of 85%
              </Box>
            </Box>
          </Card> */}
        </div>
     
      );
};

export default CardSalonProduct;