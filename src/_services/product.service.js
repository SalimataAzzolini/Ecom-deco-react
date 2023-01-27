import Axios from "./caller.services";

let getAllProducts = () => {
    return Axios.get('/products')
}

/**
 * Récupération d'un produit
 */
let getProduct = (cid) => {
    return Axios.get('/products/'+cid)
}

/**
 * Ajout d'un products
 */
let addProduct = (product) => {
    return Axios.put('/products', product)
}

/**
 * Mise à jour d'un products
 */
let updateProduct = (product) => {
    return Axios.patch('/products/'+product.id, product)
}

/**
 * Suppression d'un products
 */
let deleteProduct = (cid) => {
    return Axios.delete('/products/'+cid)
}

// Déclaration des services pour import
export const productService = {
    getAllProducts, getProduct, addProduct, updateProduct, deleteProduct
}