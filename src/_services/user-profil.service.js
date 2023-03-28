import Axios from './caller.services'

let userEditProfil = () => {
    Axios.put('/profile/edit/')

}

export const userProfilService ={
    userEditProfil
}
