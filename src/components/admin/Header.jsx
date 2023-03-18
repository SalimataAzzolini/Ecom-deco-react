import React from 'react';
import { useNavigate } from 'react-router-dom';
/* import { Link } from 'react-router-dom'; */
import './style/header-admin.scss';
import { accountService } from '@/_services/account.service';

const Header = () => {
   
  let navigate = useNavigate()

    // Gestion du bouton de déconnexion
    const logout = () => {
        accountService.logout()
        navigate('/')
    }

    return (

     <header className="header_admin">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <h2> Header Admin</h2>
          <ul className="navbar-nav mr-auto" id="ul-nav">
           {/*  <li className="nav-item">
              <Link to="/admin/user/index" className="nav-link">Liste Users</Link>
            </li>
            <li className="nav-item" >
              <Link to="/admin/user/edit" className="nav-link">Edit User</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/user/add" className="nav-link">Ajouter un user</Link>
            </li>
            <li><Link to="admin">&nbsp;Admin</Link></li>
           */}
           <button onClick={logout} type="button" className="btn btn-dark"> Logout</button>
          </ul>
          
        </div>
      </nav>
    </header>
 
    );
};

export default Header;