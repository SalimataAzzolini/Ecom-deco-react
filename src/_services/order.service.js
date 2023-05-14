import Axios from "./caller.services";

let getAllOrders = () => {
    return Axios.get('/order/list')
}

/**
 * Récupération d'un order
 * @param {int} oid
*/

let getOrder = (oid) => {
    return Axios.get('/order/'+oid)
}

/**
 * Récuperer commande par réference
 * 
*/  

let getOrderByRef = (ref) => {
    return Axios.get('/order/reference/'+ref) 
}

/**
 * //Route pour changer le statut d'une commande
 * @param {int} oid
 * @param {string} status
 * 
*/

let updateOrderStatus = (oid, status) => {
    return Axios.put('/order/'+oid+'/status', {status: status}) 
}

/**
 * //Route pour supprimer une commande
 * @param {int} oid
 * 
 */

let deleteOrder = (oid) => {
    return Axios.delete('/order/'+oid+'/delete')
}


// Déclaration des services pour import
export const orderService = {
    getAllOrders, getOrder, getOrderByRef, updateOrderStatus, deleteOrder
}




