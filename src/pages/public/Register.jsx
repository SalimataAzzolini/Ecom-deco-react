import {useState} from 'react';
import { accountService } from "@/_services/";
import { useNavigate } from "react-router-dom";
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

    const [errors, setErrors] = useState({});

    const validateForm = () => {
      const errors = {};
    
      if (!credentials.email) {
        errors.email = "Veuillez entrer votre adresse e-mail.";
      }
    
      if (!credentials.password) {
        errors.password = "Veuillez entrer votre mot de passe.";
      } else if (credentials.password.length < 8) {
        errors.password = "Le mot de passe doit contenir au moins 8 caractères.";
      }
    
      if (!credentials.confirm_password) {
        errors.confirm_password = "Veuillez confirmer votre mot de passe.";
      } else if (credentials.password !== credentials.confirm_password) {
        errors.confirm_password = "Les mots de passe ne correspondent pas.";
      }

      if (!credentials.firstname) {
        errors.firstname = "Veuillez entrer votre prénom.";
      }

      if (!credentials.lastname) {
        errors.lastname = "Veuillez entrer votre nom.";
      }

      if (!credentials.address) {
        errors.address = "Veuillez entrer votre adresse.";
      }

      if (!credentials.zipcode) {
        errors.zipcode = "Veuillez entrer votre code postal.";
      }

      if (!credentials.city) {
        errors.city = "Veuillez entrer votre ville.";
      }

      if (credentials.password !== credentials.confirm_password) {
        errors.confirm_password = "Les mots de passe ne correspondent pas.";
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
         
        if (!validateForm()) return;
        accountService.register(credentials)
        .then(res => {
            console.log(res);
            if(res.status === 200){
                setMessage("Vous êtes bien enregistré");
                navigate("/bienvenue", { replace: true });
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
           {errors.email && <div className="error-message">{errors.email}</div>}

          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="Min 8 caractère, majuscule, chiffre, caractère spécial"
            name="password"
            value={credentials.password}
            onChange={onChange}
            className=' all-input-register big-input-register '
          />
         
          {errors.password && <div className="error-message">{errors.password}</div>}

          <label> CONFIRM PASSWORD</label>
          <input
            type="password"
            placeholder="Ressaisir le même mot de passe"
            name="confirm_password"
            value={credentials.confirm_password}
            onChange={onChange}
            className='all-input-register big-input-register'
          />
          {errors.confirm_password && <div className="error-message">{errors.confirm_password}</div>}

        <div className='div-inputs-register'>
            <div> 
                <label>Firstname</label>
                <input
                    type="text"
                    placeholder="Prénom"
                    name="firstname"
                    value={credentials.firstname}
                    onChange={onChange}
                    className='all-input-register input-register'
                />
              {errors.firstname && <div className="error-message">{errors.firstname}</div>}

            </div>
            <div>
            <label>Lastname</label>
            <input
                type="text"
                placeholder="Nom"
                name="lastname"
                value={credentials.lastname}
                onChange={onChange}
                className='all-input-register input-register  '
            />
            {errors.lastname && <div className="error-message">{errors.lastname}</div>}

            </div>
        </div>
        <div className='div-inputs-register'>
            <div>
                {/* <label>Address</label> */}
                <input
                type="text"
                placeholder="Addresse"
                name="address"
                value={credentials.address}
                onChange={onChange}
                className='all-input-register input-register  '
                />
                {errors.address && <div className="error-message">{errors.address}</div>}
            </div>
            <div>
                {/* <label>Zipcode</label> */}
                <input
                type="text"
                placeholder="Code postale"
                name="zipcode"
                value={credentials.zipcode}
                onChange={onChange}
                className='all-input-register input-register'
                />
                {errors.zipcode && <div className="error-message">{errors.zipcode}</div>}
            </div>
        </div>
            {/* <label>City</label> */}
            <input
            type="text"
            placeholder="Ville"
            name="city"
            value={credentials.city}
            onChange={onChange}
            className='all-input-register big-input-register'
            />
            {errors.city && <div className="error-message">{errors.city}</div>}

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