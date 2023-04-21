import { useEffect, useRef, useState } from 'react';
import CardSalonProduct from '@/components/public/CardSalonProduct';
import { productService } from '@/_services';


const BedRoom = () => {
    const flag = useRef(false);
    const [products, setProducts] = useState();
    const [bedRoomProducts, setBedRoomProducts] = useState();
 
    
    useEffect(() => {

        if(!flag.current){
            productService.getAllProducts()
            .then(res => {
                // console.log(res.data);
                setProducts(res.data);

            })
            .catch(err => console.log(err))
        }

        flag.current = true

    }, [])

    useEffect(() => {
        if(products){
            setBedRoomProducts(products.filter(product => product.category === 'chambre'));
        }
    }, [products])


  
    return (

        <div className='product-card-container'>
            {bedRoomProducts && 
                bedRoomProducts.map((product, index) => (
                    <CardSalonProduct key={index} product={product} />
            ))}
        </div>
    )
};

export default BedRoom;