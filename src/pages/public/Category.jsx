import { useEffect, useRef, useState} from 'react';
import { productService } from '@/_services';
import CardSalonProduct from '@/components/public/CardSalonProduct';
import './style/category.scss';


const Category = () => {

    const flag = useRef(false);
    const [products, setProducts] = useState();

    useEffect(() => {
        if(!flag.current){ //permet de ne pas relancer la requête à chaque fois que le composant est rechargé. ce qui permet de ne pas avoir de boucle infinie
            productService.getAllProducts()
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err))
        }
        flag.current = true;
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
