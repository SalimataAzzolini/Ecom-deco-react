import Axios from "./caller.services";
import jwt_decode from "jwt-decode";


/**
 * Enregistrement de l'utilisateur
*/
let register = (credentials) => {
  return Axios.post("/register", credentials);
};

/**
 * Connexion de l'utilisateur
 */
let loginUser = (credentials) => {
  return Axios.post("/login/user", credentials);
};

/**
 * Récupération des données de l'utilisateur
 */
let getUserDatas = (credentials) => {
  return Axios.post("profile/user", credentials);
};


/**
 * Sauvegarde des données de l'utilisateur dans le localStorage
 */
let saveUserDatas = (userDatas) => {
  localStorage.setItem("userDatas", JSON.stringify(userDatas)); 
};

/**
 * Sauvegarde du token dans le localStorage
 */
let saveToken = (token) => {
  localStorage.setItem("token", token);
};

/**
 * Sauvegarde du token csrf dans le localStorage
 */
let saveCsrfToken = (csrfToken) => {
  localStorage.setItem("csrfToken", csrfToken);
};

/**
 * Suppression du token du localStorage
 */
let logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("csrfToken");
};

/**
 * Vérification de la présence du token dans le localStorage
 */
let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token; // not not token transforme les variable en booleen et d'avoir un resultat true ou false si il  ya chose dans le local envoie true sinon envoie false
};

/**
 * Récupération du token dans le localStorage
 */
let getToken = () => {
  return localStorage.getItem("token");
};

/**
 * Récupération du token csrf dans le localStorage
 */
let getCsrfToken = () => {
  return localStorage.getItem("csrfToken");
};


/**
 * Modification du profil de l'utilisateur
 */
let userEditProfil = (userDatas) => {
  return Axios.put("/profile/edit", userDatas);
}


/**
 * Connexion de l'admin
 */
let loginAdmin = (credentials) => {
  return Axios.post("/login/admin", credentials);
};

/**
 * Vérification si l'utilisateur est admin
 */
let isAdmin = () => {
  let token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  return decoded.roles.includes("ROLE_ADMIN");

};


// Déclaration des services pour import
export const accountService = {
  register,
  loginUser,
  getUserDatas,
  saveUserDatas,
  saveToken,
  logout,
  isLogged,
  getToken,
  userEditProfil,
  loginAdmin,
  isAdmin,
  saveCsrfToken,
  getCsrfToken,

};
