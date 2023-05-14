import {useState} from 'react';
import { accountService } from "@/_services/";
import { Link, useNavigate } from "react-router-dom";
import './style/register.scss'
import Logo from "@/assets/img/logo.png";

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
                setMessage("Vous êtes bien enregistré");
                navigate("/auth/login", { replace: true });
            } else {
                setMessage("Une erreur est survenue");
            }
        })
        .catch(err => console.log(err))
    }


    return (
        <div className="register">
        <div>
            {message && <div className="message">{message}</div>
            }
        <div className="container-register">
        <form className="container-form-register" onSubmit={onSubmit}>
        <div className="brand-logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="brand-title">REGISTER</div>

        <div className="inputs-register">

        <label>EMAIL</label>
          <input
            type="email"
            placeholder="example@test.com"
            name="email"
            value={credentials.email}
            onChange={onChange}
            className='all-input-register big-input-register '
          />

          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="Min 6 charaters long"
            name="password"
            value={credentials.password}
            onChange={onChange}
            className=' all-input-register big-input-register '
          />
            <label> CONFIRM PASSWORD</label>
          <input
            type="password"
            placeholder="Min 6 charaters long"
            name="confirm_password"
            value={credentials.confirm_password}
            onChange={onChange}
            className='all-input-register big-input-register'
          />
        <div className='div-inputs-register'>
            <div> 
                <label>Firstname</label>
                <input
                    type="text"
                    placeholder="Firsname"
                    name="firstname"
                    value={credentials.firstname}
                    onChange={onChange}
                    className='all-input-register input-register'
                />
            </div>
            <div>
            <label>Lastname</label>
            <input
                type="text"
                placeholder="Lastname"
                name="lastname"
                value={credentials.lastname}
                onChange={onChange}
                className='all-input-register input-register  '
            />
            </div>
        </div>
        <div className='div-inputs-register'>
            <div>
                {/* <label>Address</label> */}
                <input
                type="text"
                placeholder="Address"
                name="address"
                value={credentials.address}
                onChange={onChange}
                className='all-input-register input-register  '
                />
            </div>
            <div>
                {/* <label>Zipcode</label> */}
                <input
                type="text"
                placeholder="Zipcode"
                name="zipcode"
                value={credentials.zipcode}
                onChange={onChange}
                className='all-input-register input-register  '
                />
            </div>
        </div>
            {/* <label>City</label> */}
            <input
            type="text"
            placeholder="City"
            name="city"
            value={credentials.city}
            onChange={onChange}
            className='all-input-register big-input-register'
            />



          <button type="submit"
          className='btn-register'
          
          > S'inscrire</button>
        </div>
      </form>
      </div>

       


      
    </div>
    </div>
    );
};

export default Register;