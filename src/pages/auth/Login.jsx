import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { accountService } from "@/_services/";
import { UserDatasContext } from "@/_contexts/userDatasContext";
import HeaderPublic from "@/components/public/HeaderPublic";
import FooterHome from "@/components/public/FooterHome";
import Logo from "@/assets/img/logo.png";

import "./auth.scss";

const Login = () => {
  let navigate = useNavigate();
  const  {userDatas, setUserDatas}  = useContext(UserDatasContext);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });


  const onChange = (e) => {
    setCredentials({
      ...credentials, 
      [e.target.name]: e.target.value,
    });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    accountService
      .login(credentials)
      .then((res) => {
        // console.log(res);
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
      <HeaderPublic />
    <div className="login">
    <div id="login-form"> 
    <form className="container-form-login" onSubmit={onSubmit}>
    <div className="brand-logo">
      <img src={Logo} alt="logo" />
    </div>
    <div className="brand-title">LOGIN</div>

    <div className="inputs-login-form">
      <label className="label-login-form">EMAIL</label>
      <input
        type="email"
        placeholder="example@test.com"
        name="email"
        value={credentials.email}
        onChange={onChange}
        className="input-login-form"
      />
      <label className="label-login-form">PASSWORD</label>
      <input
        type="password"
        placeholder="Min 6 charaters long"
        name="password"
        value={credentials.password}
        onChange={onChange}
        className="input-login-form"
      />
      <button type="submit"
      className="btn-login-form"
      >LOGIN</button>
      <a href="http://127.0.0.1:8000/reset-password/reset-password" className="link-password-forget"> Mot de passe oublié ?
      </a>
      <p> Pas encore de compte ? 
        <Link to="/register" className="link-register"> S'enrégister
        </Link>
      </p>
    </div>

  </form>
  </div>
  <FooterHome />
  </div>
  </div>
  );
};

export default Login;
