import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Layout, Menu, theme } from 'antd';
/* import { Link } from 'react-router-dom'; */
import { accountService } from '@/_services/account.service';

const { Header } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const HeaderUser = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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

        <Button onClick={logout} type="primary">Logout</Button>
      </Header>
    </div>
  );
};

export default HeaderUser;
