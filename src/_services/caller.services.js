import axios from "axios";
import { accountService } from "./account.service";

// Paramétrage de base d'axios sur ma base url de l'api
const Axios = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

//Intercepteur pour la mise en place du token et du X-csrf dans la requête
Axios.interceptors.request.use((request) => {
    if (accountService.isLogged()) {
        request.headers.Authorization = "Bearer " + accountService.getToken();
        request.headers["X-CSRF-Token"] = accountService.getCsrfToken();
  }
  return request;
});

// Intercepteur de réponse API pour vérification de la session si expirée ou pas
Axios.interceptors.response.use(
  (response) => {
      return response;
  },  (error) => {
   if (error.response.status === 401) {
        accountService.logout();
        window.location = "/auth/login";
    } else {
      return Promise.reject(error);
    }
  }
);

export default Axios;
