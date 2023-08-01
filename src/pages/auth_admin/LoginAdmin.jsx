import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { accountService } from "@/_services/";
import HeaderPublic from "@/components/public/HeaderPublic";
import FooterHome from "@/components/public/FooterHome";
import Logo from "@/assets/img/logo.png";
import './login-admin.scss'

const LoginAdmin = () => {

    let navigate = useNavigate();


    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
      });

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
    });
}
    const onSubmit = (e) => {
        e.preventDefault();
        accountService
        .loginAdmin(credentials)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const csrfToken = res.data.csrf;
          localStorage.setItem("csrfToken", csrfToken);
          accountService.saveToken(res.data.token); 
          navigate("/admin/dashboard", { replace: true });
        } else {
          console.log("erreur...");
        }
      })
      .catch((error) => console.log(error));
  };


    return (
      <div> 
      <HeaderPublic />
      <div className="login">
            <div id="login-form"> 
            <form className="container-form-login form-login-admin" onSubmit={onSubmit}>
            <div className="brand-logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="brand-title">LOGIN ADMIN</div>

            <div className="inputs-login-form">
              <label className="label-login-form">EMAIL</label>
              <input
                type="email"
                placeholder="example@test.com"
                name="email"
                value={credentials.email}
                onChange={onChange}
                className="input-login-form input-log-admin"
              />
              <label className="label-login-form">PASSWORD</label>
              <input
                type="password"
                placeholder="Minimum 8 caractère"
                name="password"
                value={credentials.password}
                onChange={onChange}
                className="input-login-form input-log-admin"
              />
              <button type="submit" className="btn-login-form btn-login-admin">
                Connexion
              </button>

              {/* <a href="http://127.0.0.1:8000/reset-password/reset-password" className="link-password-forget"> Mot de passe oublié ?
              </a> */}
            </div>

          </form>
            </div>
      </div>
      <FooterHome />
  </div>
     
    );
};

export default LoginAdmin;