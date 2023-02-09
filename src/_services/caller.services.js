import axios from "axios";
import { accountService } from "./account.service";

// Paramétrage de base d'axios sur une base url
const Axios = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

//Intercepteur pour la mise en place du token dans la requête
Axios.interceptors.request.use((request) => {
  //Si on est logge alors dans l entete de la requete j'injecte le token
  if (accountService.isLogged()) {
    request.headers.Authorization = "Bearer " + accountService.getToken();
  }

  return request;
});

// Intercepteur de réponse API pour vérification de la session si expirée ou pas
//Attention ici si on utilise des states ou des stores comme redux ca va le vider comme cest un rafraichissement
/* Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      accountService.logout();
      window.location = "/auth/login";
    } else {
      return Promise.reject(error);
    }
  }
); */

export default Axios;
