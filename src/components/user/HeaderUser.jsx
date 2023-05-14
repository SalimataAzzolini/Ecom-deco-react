import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Layout } from 'antd';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
/* import { Link } from 'react-router-dom'; */
import { accountService } from '@/_services/account.service';
import './style/header-user.scss';


const { Header } = Layout;

const HeaderUser = () => {

  let navigate = useNavigate();

  // Gestion du bouton de déconnexion
  const logout = () => {
      accountService.logout()
      navigate('/')
  }
  return (
      <div className="header-user">
     
          <Link to='/basket' className='link-basket-user'>Panier
              <ShoppingBasketIcon className="basket-icon-user"/>
          </Link>
          <button onClick={logout} className="logout-btn-user" >Déconexion</button>
    </div>
  );
};

export default HeaderUser;
