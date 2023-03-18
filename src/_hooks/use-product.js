import React, {useState, useEffect, useCallback} from "react";
import { productService } from '@/_services';

const useProduct = () => {
    
    const [products, setProducts] = useState([]);
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

    // const getProducts = useCallback( async() => {
    //     try {
    //         const response = await productService.getAll();
    //         setProducts(response.data);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }, []);
  
    return { products};
}