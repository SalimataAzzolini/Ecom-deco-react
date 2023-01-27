import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productService } from '@/_services';


const Service = () => {

    let {cid} = useParams();
    const [product, setProduct] = useState({});
      
    
    useEffect(() => {
        productService.getProduct(cid)
        .then(res => {
            console.log(res.data);
            setProduct(res.data)
        })
        .catch(err => console.log(err))
    }, []);


    return (
        <div>
           <img src={product.image} alt={product.name} style={{width:'300px'}} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>


        </div>
    );
};

export default Service;