import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { accountService } from "@/_services/";
import HeaderPublic from "@/components/public/HeaderPublic";
import FooterHome from "@/components/public/FooterHome";
import Logo from "@/assets/img/logo.png";

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
      <button type="submit" className="btn-login-form">
        LOGIN
      </button>

      {/* <a href="http://127.0.0.1:8000/reset-password/reset-password" className="link-password-forget"> Mot de passe oublié ?
      </a> */}
    </div>

  </form>
  </div>
  <FooterHome />
  </div>
  </div>
      //   <div id="login-form"> 
      //   <form className="container-form " onSubmit={onSubmit}>
      //   <div className="brand-logo"></div>
      //   <div className="brand-title">LOGIN ADMIN</div>
    
      //   <div className="inputs">
      //     <label>EMAIL</label>
      //     <input
      //       type="email"
      //       placeholder="example@test.com"
      //       name="email"
      //       value={credentials.email}
      //       onChange={onChange}
      //     />
      //     <label>PASSWORD</label>
      //     <input
      //       type="password"
      //       placeholder="Min 6 charaters long"
      //       name="password"
      //       value={credentials.password}
      //       onChange={onChange}
      //     />
      //     <button type="submit">LOGIN</button>
      //   </div>
    
      // </form>
      // </div>
    );
};

export default LoginAdmin;