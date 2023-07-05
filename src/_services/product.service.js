import Axios from "./caller.services";

let getAllProducts = () => {
    return Axios.get('/products')
}

/**
 * Récupération d'un produit
 */
let getProduct = (pid) => {
    return Axios.get('/products/'+pid)
}

/**
 * Ajout d'un products
 */
let addProduct = (product) => {
    return Axios.post('/products/create/', product)
}

/**
 * Mise à jour d'un products
 */
let updateProduct = (product) => {
    return Axios.patch('/products/'+product.id+'/edit', product)
}

/**
 * Suppression d'un products
 */
let deleteProduct = (pid) => {
    return Axios.delete('/products/'+pid+'/delete')
}

// Déclaration des services pour import
export const productService = {
    getAllProducts, getProduct, addProduct, updateProduct, deleteProduct
}