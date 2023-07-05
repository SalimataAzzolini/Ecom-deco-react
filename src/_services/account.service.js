import Axios from "./caller.services";
import jwt_decode from "jwt-decode";

let register = (credentials) => {
  return Axios.post("/register", credentials);
};

let loginUser = (credentials) => {
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

let loginAdmin = (credentials) => {
  return Axios.post("/login/admin", credentials);
};

let isAdmin = () => {
  let token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  return decoded.roles.includes("ROLE_ADMIN");

};

// Déclaration des services pour import
export const accountService = {
  register,
  loginUser,
  saveToken,
  logout,
  isLogged,
  getToken,
  userEditProfil,
  loginAdmin,
  isAdmin

};
