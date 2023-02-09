import Axios from "./caller.services";

let getAllCategories = () => {
    return Axios.get('/api/categories')
}

/**
 * Récupération d'une catégorie
 * @param {*} cid
 * @returns
 * 
*/
let getCategory = (cid) => {
    return Axios.get('/api/categories/'+cid)
}

/**
 * Ajout d'une catégorie
 * @param {*} category
 * @returns
 *
*/
let addCategory = (category) => {
    return Axios.post('/api/categories', category)
}

/**
 * Mise à jour d'une catégorie
 * @param {*} category
 * @returns
 * 
*/

let updateCategory = (category) => {
    return Axios.patch('/api/categories/'+category.id, category)
}

/**
 * Suppression d'une catégorie
 * @param {*} cid
 * @returns
 *  
*/

let deleteCategory = (cid) => {
    return Axios.delete('/api/categories/'+cid)
}

// Déclaration des services pour import
export const categoryService = {
    getAllCategories, getCategory, addCategory, updateCategory, deleteCategory
}


