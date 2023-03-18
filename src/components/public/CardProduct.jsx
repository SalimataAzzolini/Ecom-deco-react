import React from 'react';
import { Link } from 'react-router-dom';

const CardProduct = () => {
    return (
        <div className="my-card">
          <div id="card-container">
            {/* <!-- Start	Product details --> */}
    
            <div className="product-image">
              <img
                src="https://sc01.alicdn.com/kf/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3/200006212/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3.jpg"
                alt="Omar Dsoky"
              />
    
              {/* <!-- 	product Information--> */}
              <div className="info">
                <h2>The Description</h2>
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
              <h1>Biru Putaran</h1>
          
             
              {/* <!-- 		the Product rating --> */}
              <span className="hint-star star">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </span>
    
              <p className="information">
                Especially good for container gardening, the Angelonia will keep
            
              </p>
    
              <div className="control">
                
              <Link to={''}> 
                <button className="btn">
                  <span className="price"> 16$</span>
    
                {/*   <span className="shopping-cart">
                  <FontAwesomeIcon icon="fa-solid fa-tag" />   
                  </span> */}
    
                  <span className="buy">Voir plus</span>
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

export default CardProduct;