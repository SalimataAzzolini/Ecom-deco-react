import { useEffect, useRef, useState} from 'react';
import { productService } from '@/_services';
import CardSalonProduct from '@/components/public/CardSalonProduct';
import './style/category.scss';


const Category = () => {

    const flag = useRef(false); 
    const [products, setProducts] = useState();

    
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


    return (
        <div className='product-card-container'>
            {products && 
                products.map((product, index) => (
                    <CardSalonProduct key={index} product={product} />
            ))}

        
        </div>
    );
};

export default Category;
