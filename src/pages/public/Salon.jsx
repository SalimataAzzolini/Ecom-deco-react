import { useSelector} from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import CardSalonProduct from '@/components/public/CardSalonProduct';
import { productService } from '@/_services';


const Salon = () => {

    const flag = useRef(false);
    const [products, setProducts] = useState();
    const [salonProducts, setSalonProducts] = useState();
    

    
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
            setSalonProducts(products.filter(product => product.category === 'salon'));
        }
    }, [products])

  
    return (

        <div className='product-card-container'>
            {salonProducts && 
                salonProducts.map((product, index) => (
                    <CardSalonProduct key={index} product={product} />
            ))}
        </div>
    )

};

export default Salon;

