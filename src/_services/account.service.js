import Axios from "./caller.services";
// import jwt from 'jsonwebtoken';


let login = (credentials) => {
  return Axios.post("/login", credentials);
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

/**
 * Suppression du token du localStorage
 */
let logout = () => {
  localStorage.removeItem("token");
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token; // not not token transforme les variable en booleen et davoir un resultat true ou false si il  ya chose dans le local envoie true sinon envoie false
};

let getToken = () => {
  return localStorage.getItem("token");
};

let userEditProfil = (userDatas) => {
  return Axios.put("/profile/edit/", userDatas);
}

// Login user Admin avec vérification du token et role admin
let loginAdmin = (credentials) => {
  return Axios.post("/login/admin", credentials);
};

let isAdminLogged = () => {


};

// Déclaration des services pour import
export const accountService = {
  login,
  saveToken,
  logout,
  isLogged,
  getToken,
  userEditProfil,
  loginAdmin
};
