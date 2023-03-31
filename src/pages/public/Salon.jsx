import React, {useState, useEffect, useRef} from 'react';
import { productService } from '@/_services';
import CardSalonProduct from '@/components/public/CardSalonProduct';

const Salon = () => {
    const [products, setProducts] = useState([]);
    const flag = useRef(false)

    useEffect(() => {

        if(!flag.current){
            productService.getAllProducts()
            .then(res => {
                console.log(res.data);
                setProducts(res.data)

            
            })
            .catch(err => console.log(err))
        }

        flag.current = true

    }, []);



    return (

       < div className='home-card'>
        <div className='card-container'>
            {products.length > 0 && 
                products.map((product, index) => (
                    <CardSalonProduct key={index} product={product} />
            ))}

        
        </div>
        </div>
    )

};

export default Salon;