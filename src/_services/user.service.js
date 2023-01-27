import Axios from './caller.services'

// Si use query mettre la fonction en asynchrone = async () =>....
let getAllUsers = () => {
    return Axios.get('/users');
    //si use query destructurer et data vient de res.data
/*     const {data} = await Axios.get('/users') 
return data;
*/
}

let getUser = (uid) => {
    return Axios.get('/users/'+uid)
}


let addUser = (user) => {
    return Axios.post('/users', user)
}

//Recupere des donnes qui represente l'utilisateur user+id et on renvoie le user
let updateUser = (user) => {
    return Axios.patch('/users/'+user.id, user)
}

let deleteUser = (uid) => {
    return Axios.delete('/users/'+uid)
}

// Décaraltion des esrvices pour import
export const userService = {
    getAllUsers, getUser, addUser, updateUser, deleteUser
}