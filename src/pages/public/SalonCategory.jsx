import React, {useState, useEffect, useRef} from 'react';
import { productService } from '@/_services';
import CardSalonProduct from '@/components/public/CardSalonProduct';

const SalonCategory = () => {
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

    const getProducts = async () => {
        await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setProducts(res)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        if(!flag.current){
            getProducts();
        }
        flag.current = true
    })


    return (

       < div className='home-card'>
        <div className='card-container'>
            {products.length > 0 && 
                products.map((product, index) => (
                    // <MyCard key={index} product={product} />
                    <CardSalonProduct key={index} product={product} />
            ))}

        
        </div>
        </div>
    )

};

export default SalonCategory;