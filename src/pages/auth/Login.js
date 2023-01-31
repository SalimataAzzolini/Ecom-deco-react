import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { accountService } from "@/_services/";

import "./auth.css";
/* import axios from 'axios'; */

const Login = () => {
  let navigate = useNavigate();

  // const [password, setPassword] = useState(''); / A la place de ci-dessus on va se faire un objet */

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    /* console.log(e.target.name); console.log(e.target.value); */
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };

  /*  async function onSubmit(e) {
    e.preventDefault();

    let saveToken = (token) => {
      localStorage.setItem("token", token);
    };
  
    await fetch("http://127.0.0.1:8000/api/login", options)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          saveToken(res.token);
          navigate("/admin", { replace: true });
        } else {
          console.log("erreur");
        }
      })
      .catch((error) => console.log(error));
  } */

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(credentials);
    accountService
      .login(credentials)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          accountService.saveToken(res.data.token);
          navigate("/admin", { replace: true });
        } else {
          console.log("erreur...");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="group">
        {/*  on recupere levent e et on passe setPassword */}
        {/*  <input type='text' name='email' value={email} onChange={e => setEmail(e.target.value)}/> */}

        <label htmlFor="email"> Identifiant </label>
        <input
          type="text"
          name="email"
          value={credentials.email}
          onChange={onChange}
        />
      </div>

      <div className="group">
        <label htmlFor="password"> Mot de passe </label>
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
      </div>

      <div className="group">
        <button className="btn btn-warning"> Connexion</button>
      </div>
    </form>
  );
};

export default Login;
