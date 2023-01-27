import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { userService } from '../../../_services/user.service';

const UserAdd = () => {

    let navigate = useNavigate();

    const [user, setUser] = useState([]);


    const onChange = (e) => {
      
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
      
    }

    const onSubmit = (e) => {
        e.preventDefault()
       console.log(user);

       userService.addUser(user)
       .then(res => {
           console.log(res);
           navigate('/admin/user/index')
       })
       .catch(err => console.log(err))
    }


    return (
        <div>
            Ajouter un user

            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="username">Surnom</label>
                    <input type="text" name="username" value={user.username} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={user.email} onChange={onChange} />
                </div>

                <div className="group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={user.password} onChange={onChange} />
                </div>
               {/*   <div className="group">
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" name="firstname" value={user.name.firstname} onChange={onChange} />
                </div>   */}

                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default UserAdd;