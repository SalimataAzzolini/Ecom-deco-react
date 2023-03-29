import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { accountService } from "@/_services/";
import { UserDatasContext } from "@/_contexts/userDatasContext";

import "./auth.css";

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

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };

  //  async function onSubmit(e) {
  //   e.preventDefault();

  //   let saveToken = (token) => {
  //     localStorage.setItem("token", token);
  //   };
  
  //   await fetch("http://127.0.0.1:8000/api/login", options)
  //     .then((res) => {
  //       return res.json();
  //       // console.log(res);
  //       // if (res.status === 200) {
  //       //   saveToken(res.token);
  //       //   navigate("/admin", { replace: true });
  //       // } else {
  //       //   console.log("erreur");
  //       // }
  //     })
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // } 

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
        "Cookie": `token=${accountService.getToken()}`,
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserDatas(data);
        // accountService.saveUserDatas(data);
      })
      .catch((error) => console.log(error));
  };


  return (


    <div id="login-form"> 
    <form className="container-form " onSubmit={onSubmit}>
    <div className="brand-logo"></div>
    <div className="brand-title">LOGIN</div>

    <div className="inputs">
      <label>EMAIL</label>
      <input
        type="email"
        placeholder="example@test.com"
        name="email"
        value={credentials.email}
        onChange={onChange}
      />
      <label>PASSWORD</label>
      <input
        type="password"
        placeholder="Min 6 charaters long"
        name="password"
        value={credentials.password}
        onChange={onChange}
      />
      <button type="submit">LOGIN</button>
    </div>

  </form>
  </div>
  );
};

export default Login;
