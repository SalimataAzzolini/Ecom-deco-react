import { useState} from 'react';
// import { UserDatasContext } from "@/_contexts/userDatasContext";
import { accountService } from "@/_services/";
import "./style/user-profile-edit.scss";



const UserProfileEdit = () => {

  const userDatas = localStorage.getItem('userDatas');
  const userDatasParsed = JSON.parse(userDatas);

  
  const [firstname, setFirstname] = useState(userDatasParsed.firstname);
  const [lastname, setLastname] = useState(userDatasParsed.lastname);
  const [email, setEmail] = useState(userDatasParsed.email);
  const [address, setAddress] = useState(userDatasParsed.address);
  const [city, setCity] = useState(userDatasParsed.city);
  const [zipCode, setZipCode] = useState(userDatasParsed.zipcode);


  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // console.log(userDatas);

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "zip":
        setZipCode(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
        
    }
  }


  const onSubmit = (e) => {
    e.preventDefault();
    userDatasParsed.password = password;
    userDatasParsed.firstname = firstname;
    userDatasParsed.lastname = lastname;
    userDatasParsed.email = email;
    userDatasParsed.address = address;
    userDatasParsed.city = city;
    userDatasParsed.zipCode = zipCode;

    accountService.userEditProfil(userDatasParsed)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        setMessage("Votre profil a bien été modifié !");
        setTimeout(() => {
          setMessage('');
        }, 3000);
        localStorage.setItem('userDatas', JSON.stringify(userDatasParsed));
      } else {
        setMessage("Une erreur est survenue, veuillez réessayer plus tard.");
        console.log("erreur...");
      }
    }
    )
  }
  

    return ( 
        
      <div id="user-edit-form"> 
        {message && <div className="alert alert-success">{message}</div>}
        <form className="container-form" onSubmit={onSubmit} >
        <div className="brand-title"> INFOS</div>
        <div className="container-inputs">
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={onChange}
            className="input-user-edit"
          
          />
             <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={onChange}
            className="input-user-edit"
          />
          <input
            type="text"
            name="address"
            value={address}
            onChange={onChange}
            className="input-user-edit"
          />
             <input
            type="number"
            name="zipcode"
            value={zipCode}
            onChange={onChange}
            className="input-user-edit"
          />
             <input
            type="city"
            name="city"
            value={city}
            onChange={onChange}
            className="input-user-edit"
          />
             <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            className="input-user-edit"
          />

          <h6 style={{marginTop : "10px"}}> Changer de mot de passe : </h6>

          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-user-edit"
          />
          <div className='div-btn-edit-user'>
            <button className='btn-user-edit'>Enregistrer</button>
            </div>
        </div>

        </form>

      </div>
    );
}


export default UserProfileEdit;