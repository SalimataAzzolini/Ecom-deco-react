import React, {useState, useEffect, useRef} from 'react';
import { productService } from '@/_services';
import MyCard from '@/components/public/MyCard';
import './home.css';


const Home = () => {

    const [products, setProducts] = useState([]);
    const flag = useRef(false)

    // useEffect(() => {

    //     if(!flag.current){
    //         productService.getAllProducts()
    //         .then(res => {
    //             setProducts(res.data)
            
    //         })
    //         .catch(err => console.log(err))
    //     }

    //     flag.current = true

    // }, []);

    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(res => {
        setProducts(res)
    })


    return (

       < div className='home-card'>
        <div className='card-container'>
            {products.length > 0 && 
                products.map((product, index) => (
                    <MyCard key={index} product={product} />
            ))}

        
        </div>
        </div>
    )

};

export default Home;