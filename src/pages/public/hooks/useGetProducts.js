import  { useEffect, useRef, useState} from "react";
import { productService } from '@/_services';



const useGetProducts = () => {
    const flag = useRef(false);


    const [ products, setProducts ] = useState([]);

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

    return products;
}

export default useGetProducts;



