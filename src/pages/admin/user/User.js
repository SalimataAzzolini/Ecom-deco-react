import React, { useEffect, useState, useRef } from "react";
/* import { useQuery } from "react-query"; */
import { useNavigate, Link } from "react-router-dom"; // navigation programatique qui permet de naviguer dans les routes avec id donné
import { userService } from "@/_services";
import "../../admin/admin.css"



const User = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const flag = useRef(false); // flag ref pour eviter les double appels du useEffect

  //const {isLoading, error, data} = useQuery('users', userService.getAllUsers); // on ne va plus use useEffect avec le query et permet de faire qu'une seule appel
  //const users = data || {'data':[]} // comme est nes plus asynchrone pas de state pour users et il faudra declarer les fonctions dans users services en asynchrone ou tableau vide venant de la reponse daxios

  
  // Récupération de la liste des utilisateurs à l'affichage
  useEffect(() => {
    if(flag.current === false){
        userService.getAllUsers()
            .then(res => {
                console.log(res.data);
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }

    return () => flag.current = true // flag.current = true permet de placer un ref et de nettoyer evite les double appels
    
}, [])

// Facon 1 de faire le edit 
/*   const goEditUser = (userId) => {
    console.log("click");
    // Au clic il va dans la page edit pareil que dans le link ci dessous url relative
    navigate("../edit/" + userId, { replace: true }); // ..pour remonter d'un cran dans le dossier user et . la ou on est chemin relatif en absolu /admin/user/edit
  }; */


  const delUser = (userId) => {
    userService.deleteUser(userId)
        .then(res => {
            console.log(res);
            setUsers(users.filter(user => user.id !== userId))
        })
        .catch(err => console.log(err))
  }

  return (
    <div>
      Liste users
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Pronom</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
            
              <td> <span 
                     style={{color:'red'}} 
                     className="del-btn" 
                     onClick={() => delUser(user.id)}>
                     x</span> </td>
               <td><Link to={`/admin/user/edit/${user.id}`}>{user.id}</Link></td>
              <td>{user.name.firstname}</td>
              <td>{user.name.lastname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
