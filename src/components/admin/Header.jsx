import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
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

     <div className="container-header-admin">
       
        <div className="search-bar-admin">
                <input
                    placeholder="Search"
                    type="text"
                    name="search"
                    className="search-input-admin"
                />
        </div>
        
       
    </div>
 
    );
};

export default Header;