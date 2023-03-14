import React, {useState, useEffect, useCallback} from "react";
import { productService } from '@/_services';

const useProduct = () => {
    
    const [products, setProducts] = useState([]);


    const getProducts = useCallback( async() => {
        try {
            const response = await productService.getAll();
            setProducts(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }, []);
  
}