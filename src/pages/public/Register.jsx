import {useState} from 'react';
import { accountService } from "@/_services/";
import { Link, useNavigate } from "react-router-dom";
import './style/register.scss'

const Register = () => {

    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        confirm_password: "",
        firstname: "",
        lastname: "",
        address: "",
        zipcode: "",
        city: "",
      })
    const [message, setMessage] = useState("");

    const onChange = (e) => {
        setCredentials({
          ...credentials,
          [e.target.name]: e.target.value,
        });
      };

    const onSubmit = (e) => {
        e.preventDefault();
         console.log(credentials);
        accountService.register(credentials)
        .then(res => {
            console.log(res);
            if(res.status === 200){
                setMessage("You are registered");
                navigate("/auth/login", { replace: true });
            } else {
                setMessage("An error occured");
            }
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            {message && <div className="message">{message}</div>
            }
        <form className="container-form-register" onSubmit={onSubmit}>
        <div className="brand-logo"></div>
        <div className="brand-title">REGISTER</div>

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
            <label> CONFIRM PASSWORD</label>
          <input
            type="password"
            placeholder="Min 6 charaters long"
            name="confirm_password"
            value={credentials.confirm_password}
            onChange={onChange}
          />
          <label>Firstname</label>
          <input
            type="text"
            placeholder="Firsname"
            name="firstname"
            value={credentials.firstname}
            onChange={onChange}
          />

          <label>Lastname</label>
          <input
            type="text"
            placeholder="Lastname"
            name="lastname"
            value={credentials.lastname}
            onChange={onChange}
          />

            <label>Address</label>
            <input
            type="text"
            placeholder="Address"
            name="address"
            value={credentials.address}
            onChange={onChange}
            />

            <label>Zipcode</label>
            <input
            type="text"
            placeholder="Zipcode"
            name="zipcode"
            value={credentials.zipcode}
            onChange={onChange}
            />

            <label>City</label>
            <input
            type="text"
            placeholder="City"
            name="city"
            value={credentials.city}
            onChange={onChange}
            />



          <button type="submit">REGISTER</button>
        </div>
      </form>
        </div>
    );
};

export default Register;