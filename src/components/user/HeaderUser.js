import React from 'react';

import { useNavigate } from 'react-router-dom';
/* import { Link } from 'react-router-dom'; */
import { accountService } from '@/_services/account.service';

const HeaderUser = () => {

  let navigate = useNavigate()

  // Gestion du bouton de déconnexion
  const logout = () => {
      accountService.logout()
      navigate('/')
  }
  return (
    <div>
      Header User works!
      <button onClick={logout} type="button" className="btn btn-dark"> Logout</button>
    </div>
  );
};

export default HeaderUser;
