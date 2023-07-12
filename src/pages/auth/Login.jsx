import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { accountService } from "../../_services";
import { UserDatasContext } from "../../_contexts/userDatasContext";
// import HeaderPublic from "../../components/public/HeaderPublic";
// import FooterHome from "../../components/public/FooterHome";
// import Logo from "../../assets/img/logo.png";
// import "./auth.scss";



export const validateFormLogin = (credentials) => {
  const errors = {};
  if (!credentials.email) {
    errors.email = "Veuillez entrer votre adresse e-mail.";
  }
  if (!credentials.password) {
    errors.password = "Veuillez entrer votre mot de passe.";
  }
  credentials.errors = errors; 
  return Object.keys(errors).length === 0;
};


const Login = () => {
  let navigate = useNavigate();
  const { userDatas, setUserDatas } = useContext(UserDatasContext);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validateFormLogin(credentials)) return;
    accountService
      .loginUser(credentials)
      .then((res) => {
        if (res.status === 200) {
          accountService.saveToken(res.data.token);
          navigate("/user", { replace: true });
          getUserDatas();
        } else {
          console.log("erreur...");
        }
      })
      .catch((error) => console.log(error));
  };

  const getUserDatas = () => {
    fetch("http://127.0.0.1:8000/profile/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accountService.getToken()}`,
        // "Cookie": `token=${accountService.getToken()}`,
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserDatas(data);
        localStorage.setItem("userDatas", JSON.stringify(data));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* <HeaderPublic /> */}
      <div className="login">
        <div id="login-form">
          <form className="container-form-login" onSubmit={onSubmit}>
            <div className="brand-logo">
              {/* <img src={Logo} alt="logo" /> */}
            </div>
            <div className="brand-title">CONNEXION</div>

            <div className="inputs-login-form">
              <label className="label-login-form" htmlFor="email-input">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="example@test.com"
                name="email"
                value={credentials.email}
                onChange={onChange}
                className="input-login-form"
                id="email-input" // Ajout de l'attribut id pour le test
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}

              <label className="label-login-form" htmlFor="password-input">
                PASSWORD
              </label>
              <input
                type="password"
                placeholder="Min 6 charaters long"
                name="password"
                value={credentials.password}
                onChange={onChange}
                className="input-login-form"
                id="password-input" // Ajout de l'attribut id pour le test
              />
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}

              <button type="submit" className="btn-login-form">
                LOGIN
              </button>
              <a
                href="http://127.0.0.1:8000/reset-password/reset-password"
                className="link-password-forget"
              >
                Mot de passe oublié ?
              </a>
              <p>
                Pas encore de compte ?{" "}
                <Link to="/register" className="link-register">
                  S'enregistrer
                </Link>
              </p>
            </div>
          </form>
        </div>
        {/* <FooterHome /> */}
      </div>
    </div>
  );
};

export default Login;
