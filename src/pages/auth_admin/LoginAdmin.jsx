import Reac, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { accountService } from "@/_services/";

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
        // console.log(res);
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
        <div id="login-form"> 
        <form className="container-form " onSubmit={onSubmit}>
        <div className="brand-logo"></div>
        <div className="brand-title">LOGIN ADMIN</div>
    
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

export default LoginAdmin;