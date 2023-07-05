import { useEffect, useRef, useState } from 'react';
import CardSalonProduct from '@/components/public/CardSalonProduct';
import { productService } from '@/_services';

const BathRoom = () => {
    const flag = useRef(false);
    const [products, setProducts] = useState();
    const [bathRoomProducts, setBathRoomProducts] = useState();
    
    useEffect(() => {
        if(!flag.current){
            productService.getAllProducts()
            .then(res => {
                console.log(res.data);
                setProducts(res.data);

            })
            .catch(err => console.log(err))
        }

        flag.current = true

    }, [])

    useEffect(() => {
        if(products){
            setBathRoomProducts(products.filter(product => product.category === 'bain'));
        }
    }, [products])


  
    return (

        <div className='product-card-container'>
            {bathRoomProducts && 
                bathRoomProducts.map((product, index) => (
                    <CardSalonProduct key={index} product={product} />
            ))}
        </div>
    )
};

export default BathRoom;