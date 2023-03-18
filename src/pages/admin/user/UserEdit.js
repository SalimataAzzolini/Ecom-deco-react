import React from 'react';
import { useRef, useEffect, useState,} from 'react';
import { useParams, useNavigate} from 'react-router-dom'; // qui est capable de nous donner tout ce qu'il y a aa donner dans notre url 
import { userService } from "@/_services";


const UserEdit = () => {

    // let params = useParams();  // console.log(params); desctrure ci-dessous
    const {uid} = useParams(); 
    const flag = useRef(false);
    let navigate = useNavigate();

    const [user, setUser] = useState([])


     // Récupération de l'utilisateur à l'affichage
     useEffect(() => {
        if(flag.current === false){
            userService.getUser(uid)
                .then(res => {
                    console.log(res.data);
                    setUser(res.data)
                 
                })
                .catch(err => console.log(err))
        }
        return () => flag.current = true
    }, [])



      // Gestion de la modification des champs du formulaire
      const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

     // Soumission du formulaire
     const onSubmit = (e) => {
        e.preventDefault()
        userService.updateUser(user)
            .then(res => {
                console.log(res);
                navigate('/admin/user/index')
            })
            .catch(err => console.log(err))
    }

       



    return (
        <div>
            Editer l'utilisateur : {user.username}

            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="username">Surnom</label>
                    <input type="text" name="username" value={user.username} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" value={user.email} onChange={onChange} />
                </div>
    
                <div className="group">
                    <button>Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default UserEdit;