import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { accountService } from "../../_services";
import HeaderPublic from "../../components/public/HeaderPublic";
import FooterHome from "../../components/public/FooterHome";
import Logo from "../../assets/img/logo.png";
import "./auth.scss";


const Login = () => {

    let navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const [credentials, setCredentials] = useState({
      email: "",
      password: "",
    });

    const validateFormLogin = () => {
        const errors = {};
        if (!credentials.email) {
          errors.email = "Veuillez entrer une adresse e-mail valide.";
        }
        if (!credentials.password) {
          errors.password = "Veuillez entrer votre mot de passe valide.";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0; 
    };
  
    const onChange = (e) => {
      setCredentials({
        ...credentials, 
        [e.target.name]: e.target.value,
      });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!validateFormLogin()) return;

        accountService
          .loginUser(credentials)
          .then((res) => {
            if (res.status === 200) {
                accountService.saveToken(res.data.token);
                accountService.saveCsrfToken(res.data.csrf_token);
                navigate("/user", { replace: true });
                onGetUserDatas();
            } else {
              setMessage("Email ou mot de passe incorrect");
            }
          })
          .catch((error) => console.log(error));
    };

    const onGetUserDatas = () => {
        accountService
          .getUserDatas(credentials)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              accountService.saveUserDatas(res.data);
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
                      <form className="container-form-login" onSubmit={onSubmit}>
                          <div className="brand-logo">
                            <img src={Logo} alt="logo" />
                          </div>
                          <div className="brand-title">CONNEXION</div>

                          <div className="inputs-login-form">
                              <label className="label-login-form"
                                htmlFor="email-input" >EMAIL
                              </label>
                              <input
                                type="email"
                                placeholder="example@test.com"
                                name="email"
                                value={credentials.email}
                                onChange={onChange}
                                className="input-login-form"
                                id="email-input" 
                              />

                            {errors.email && <div className="error-message">{errors.email}</div>}
                                <label className="label-login-form"
                                  htmlFor="password-input">PASSWORD
                                </label>
                                <input
                                  type="password"
                                  placeholder="Min 6 charaters long"
                                  name="password"
                                  value={credentials.password}
                                  onChange={onChange}
                                  className="input-login-form"
                                  id="password-input"
                                />
                              {errors.password && <div className="error-message">{errors.password}</div>}

                              <button type="submit" className="btn-login-form" >LOGIN </button>
                              <a href="http://127.0.0.1:8000/reset-password/reset-password" className="link-password-forget"> Mot de passe oublié ? </a>
                              <p> Pas encore de compte ? 
                                <Link to="/register" className="link-register"> S'enrégister </Link>
                              </p>
                          </div>

                      </form>
                  </div>
              </div>
          <FooterHome />
      </div>
  );
};

export default Login;
