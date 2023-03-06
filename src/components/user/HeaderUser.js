import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Layout } from 'antd';
/* import { Link } from 'react-router-dom'; */
import { accountService } from '@/_services/account.service';
import './header-user.css';


const { Header } = Layout;

const HeaderUser = () => {

  let navigate = useNavigate();

  // Gestion du bouton de déconnexion
  const logout = () => {
      accountService.logout()
      navigate('/')
  }
  return (
    <div>
       <Header className="header-user">
       <div className="logo" />

        <button onClick={logout} className="logout-btn-user" >Logout</button>
      </Header>
    </div>
  );
};

export default HeaderUser;
